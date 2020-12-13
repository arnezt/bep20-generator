const { balance, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const { expect } = require('chai');

const { shouldBehaveLikeTokenRecover } = require('eth-token-recover/test/TokenRecover.behaviour');

const ServiceReceiver = artifacts.require('ServiceReceiver');

contract('ServiceReceiver', function ([owner, thirdParty]) {
  const fee = ether('0.1');

  context('ServiceReceiver behaviours', function () {
    beforeEach(async function () {
      this.serviceReceiver = await ServiceReceiver.new({ from: owner });
    });

    describe('set price', function () {
      context('when the sender is owner', function () {
        it('should set price', async function () {
          await this.serviceReceiver.setPrice('ServiceMock', fee, { from: owner });

          (await this.serviceReceiver.getPrice('ServiceMock')).should.be.bignumber.equal(fee);
        });
      });

      context('when the sender is not owner', function () {
        it('reverts', async function () {
          await expectRevert(
            this.serviceReceiver.setPrice('ServiceMock', fee, { from: thirdParty }),
            'Ownable: caller is not the owner',
          );
        });
      });
    });

    describe('pay', function () {
      context('with incorrect price', function () {
        it('reverts', async function () {
          await this.serviceReceiver.setPrice('ServiceMock', fee, { from: owner });

          await expectRevert(
            this.serviceReceiver.pay(
              'ServiceMock',
              {
                from: thirdParty,
                value: fee.add(ether('1')),
              },
            ),
            'ServiceReceiver: incorrect price',
          );
        });
      });

      context('with correct price', function () {
        beforeEach(async function () {
          await this.serviceReceiver.setPrice('ServiceMock', fee, { from: owner });
        });

        it('emits a Created event', async function () {
          const { logs } = await this.serviceReceiver.pay('ServiceMock', { value: fee, from: thirdParty });

          expectEvent.inLogs(logs, 'Created', {
            serviceName: 'ServiceMock',
            serviceAddress: thirdParty,
          });
        });

        it('transfer fee to receiver', async function () {
          const initBalance = await balance.current(this.serviceReceiver.address);

          await this.serviceReceiver.pay('ServiceMock', { value: fee, from: thirdParty });

          const newBalance = (await balance.current(this.serviceReceiver.address));

          expect(newBalance).to.be.bignumber.equal(initBalance.add(fee));
        });
      });
    });

    describe('withdraw', function () {
      beforeEach(async function () {
        await this.serviceReceiver.setPrice('ServiceMock', fee, { from: owner });
        await this.serviceReceiver.pay('ServiceMock', { value: fee, from: thirdParty });
      });

      context('when the sender is owner', function () {
        it('should withdraw', async function () {
          const amount = ether('0.05');

          const contractBalanceTracker = await balance.tracker(this.serviceReceiver.address);
          const ownerBalanceTracker = await balance.tracker(owner);

          await this.serviceReceiver.withdraw(amount, { from: owner, gasPrice: 0 });

          expect(await contractBalanceTracker.delta()).to.be.bignumber.equal(amount.neg());
          expect(await ownerBalanceTracker.delta()).to.be.bignumber.equal(amount);
        });
      });

      context('when the sender is not owner', function () {
        it('reverts', async function () {
          const amount = ether('0.05');

          await expectRevert(
            this.serviceReceiver.withdraw(amount, { from: thirdParty }),
            'Ownable: caller is not the owner',
          );
        });
      });
    });

    context('like a TokenRecover', function () {
      beforeEach(async function () {
        this.instance = this.serviceReceiver;
      });

      shouldBehaveLikeTokenRecover([owner, thirdParty]);
    });
  });
});
