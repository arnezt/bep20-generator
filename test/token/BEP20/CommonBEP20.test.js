const { BN, ether, expectRevert } = require('@openzeppelin/test-helpers');

const { shouldBehaveLikeBEP20 } = require('./behaviours/BEP20.behaviour');
const { shouldBehaveLikeBEP20Burnable } = require('./behaviours/BEP20Burnable.behaviour');
const { shouldBehaveLikeBEP20Capped } = require('./behaviours/BEP20Capped.behaviour');
const { shouldBehaveLikeBEP20Mintable } = require('./behaviours/BEP20Mintable.behaviour');

const CommonBEP20 = artifacts.require('CommonBEP20');
const ServiceReceiver = artifacts.require('ServiceReceiver');

contract('CommonBEP20', function ([owner, other, thirdParty]) {
  const _name = 'CommonBEP20';
  const _symbol = 'BEP20';
  const _decimals = new BN(8);
  const _cap = new BN(200000000);
  const _initialSupply = new BN(100000000);

  const fee = ether('0.1');

  beforeEach(async function () {
    this.serviceReceiver = await ServiceReceiver.new({ from: owner });
    await this.serviceReceiver.setPrice('CommonBEP20', fee);
  });

  context('creating valid token', function () {
    describe('as a BEP20Capped', function () {
      it('requires a non-zero cap', async function () {
        await expectRevert(
          CommonBEP20.new(
            _name,
            _symbol,
            _decimals,
            0,
            _initialSupply,
            this.serviceReceiver.address,
            {
              from: owner,
              value: fee,
            },
          ),
          'BEP20Capped: cap is 0',
        );
      });
    });

    describe('as a CommonBEP20', function () {
      describe('without initial supply', function () {
        beforeEach(async function () {
          this.token = await CommonBEP20.new(
            _name,
            _symbol,
            _decimals,
            _cap,
            0,
            this.serviceReceiver.address,
            {
              from: owner,
              value: fee,
            },
          );
        });

        describe('once deployed', function () {
          it('total supply should be equal to zero', async function () {
            (await this.token.totalSupply()).should.be.bignumber.equal(new BN(0));
          });

          it('owner balance should be equal to zero', async function () {
            (await this.token.balanceOf(owner)).should.be.bignumber.equal(new BN(0));
          });
        });
      });

      describe('with initial supply', function () {
        beforeEach(async function () {
          this.token = await CommonBEP20.new(
            _name,
            _symbol,
            _decimals,
            _cap,
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

  context('CommonBEP20 token behaviours', function () {
    beforeEach(async function () {
      this.token = await CommonBEP20.new(
        _name,
        _symbol,
        _decimals,
        _cap,
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

    context('like a BEP20Capped', function () {
      beforeEach(async function () {
        // NOTE: burning initial supply to test cap
        await this.token.burn(_initialSupply, { from: owner });
      });
      shouldBehaveLikeBEP20Capped(_cap, [owner, other]);
    });

    context('like a BEP20Mintable', function () {
      shouldBehaveLikeBEP20Mintable(_initialSupply, [owner, thirdParty]);
    });

    context('like a BEP20Burnable', function () {
      shouldBehaveLikeBEP20Burnable(_initialSupply, [owner, thirdParty]);
    });

    context('like a CommonBEP20', function () {
      describe('when the sender doesn\'t have minting permission', function () {
        const from = thirdParty;

        it('cannot mint', async function () {
          const amount = new BN(50);

          await expectRevert(
            this.token.mint(thirdParty, amount, { from }),
            'Ownable: caller is not the owner',
          );
        });

        it('cannot finish minting', async function () {
          await expectRevert(
            this.token.finishMinting({ from }),
            'Ownable: caller is not the owner',
          );
        });
      });
    });
  });
});
