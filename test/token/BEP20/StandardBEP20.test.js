const { BN, ether, expectRevert } = require('@openzeppelin/test-helpers');

const { shouldBehaveLikeBEP20 } = require('./behaviours/BEP20.behaviour');

const StandardBEP20 = artifacts.require('StandardBEP20');
const ServiceReceiver = artifacts.require('ServiceReceiver');

contract('StandardBEP20', function ([owner, other, thirdParty]) {
  const _name = 'StandardBEP20';
  const _symbol = 'BEP20';
  const _decimals = new BN(8);
  const _initialSupply = new BN(100000000);

  const fee = ether('0.1');

  beforeEach(async function () {
    this.serviceReceiver = await ServiceReceiver.new({ from: owner });
    await this.serviceReceiver.setPrice('StandardBEP20', fee);
  });

  context('creating valid token', function () {
    describe('as a StandardBEP20', function () {
      describe('without initial supply', function () {
        it('should fail', async function () {
          await expectRevert(
            StandardBEP20.new(
              _name,
              _symbol,
              _decimals,
              0,
              this.serviceReceiver.address,
              {
                from: owner,
                value: fee,
              },
            ),
            'StandardBEP20: supply cannot be zero',
          );
        });
      });

      describe('with initial supply', function () {
        beforeEach(async function () {
          this.token = await StandardBEP20.new(
            _name,
            _symbol,
            _decimals,
            _initialSupply,
            this.serviceReceiver.address,
            {
              from: owner,
              value: fee,
            },
          );
        });

        describe('once deployed', function () {
          it('total supply should be equal to initial supply', async function () {
            (await this.token.totalSupply()).should.be.bignumber.equal(_initialSupply);
          });

          it('owner balance should be equal to initial supply', async function () {
            (await this.token.balanceOf(owner)).should.be.bignumber.equal(_initialSupply);
          });
        });
      });
    });
  });

  context('StandardBEP20 token behaviours', function () {
    beforeEach(async function () {
      this.token = await StandardBEP20.new(
        _name,
        _symbol,
        _decimals,
        _initialSupply,
        this.serviceReceiver.address,
        {
          from: owner,
          value: fee,
        },
      );
    });

    context('like a BEP20', function () {
      shouldBehaveLikeBEP20(_name, _symbol, _decimals, _initialSupply, [owner, other, thirdParty]);
    });
  });
});
