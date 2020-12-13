const { balance, BN, constants, ether, expectRevert } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;

const { expect } = require('chai');

const ServicePayer = artifacts.require('ServicePayerMock');
const ServiceReceiver = artifacts.require('ServiceReceiver');

contract('ServicePayer', function ([owner, thirdParty]) {
  const fee = ether('0.1');

  context('ServicePayer behaviours', function () {
    beforeEach(async function () {
      this.serviceReceiver = await ServiceReceiver.new({ from: owner });

      await this.serviceReceiver.setPrice('ServicePayerMock', fee);
    });

    it('requires a non-zero fee', async function () {
      await expectRevert(
        ServicePayer.new(
          this.serviceReceiver.address,
          {
            from: owner,
            value: new BN(0),
          },
        ),
        'ServiceReceiver: incorrect price',
      );
    });

    it('requires a ServiceReceiver', async function () {
      await expectRevert.unspecified(
        ServicePayer.new(ZERO_ADDRESS, { from: owner, value: fee }),
      );

      await expectRevert.unspecified(
        ServicePayer.new(thirdParty, { from: owner, value: fee }),
      );
    });

    it('fail with incorrect price', async function () {
      await expectRevert(
        ServicePayer.new(
          this.serviceReceiver.address,
          {
            from: owner,
            value: fee.add(ether('1')),
          },
        ),
        'ServiceReceiver: incorrect price',
      );
    });

    it('transfer fee to receiver', async function () {
      const initBalance = await balance.current(this.serviceReceiver.address);

      await ServicePayer.new(
        this.serviceReceiver.address,
        {
          from: owner,
          value: fee,
        },
      );

      const newBalance = (await balance.current(this.serviceReceiver.address));

      expect(newBalance).to.be.bignumber.equal(initBalance.add(fee));
    });
  });
});
