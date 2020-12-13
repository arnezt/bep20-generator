const { BN, expectRevert } = require('@openzeppelin/test-helpers');

const { shouldBehaveLikeBEP20 } = require('./behaviours/BEP20.behaviour');

const { shouldBehaveLikeGeneratorCopyright } = require('../../utils/GeneratorCopyright.behaviour');

const SimpleBEP20 = artifacts.require('SimpleBEP20');
const ServiceReceiver = artifacts.require('ServiceReceiver');

contract('SimpleBEP20', function ([owner, other, thirdParty]) {
  const _name = 'SimpleBEP20';
  const _symbol = 'BEP20';
  const _decimals = new BN(18);
  const _initialSupply = new BN(100000000);

  const fee = 0;

  const version = 'v1.0.0';

  beforeEach(async function () {
    this.serviceReceiver = await ServiceReceiver.new({ from: owner });
    // not to set any price means it doesn't require any fee
    // await this.serviceReceiver.setPrice('SimpleBEP20', fee);
  });

  context('creating valid token', function () {
    describe('without initial supply', function () {
      it('should fail', async function () {
        await expectRevert(
          SimpleBEP20.new(
            _name,
            _symbol,
            0,
            this.serviceReceiver.address,
            {
              from: owner,
              value: fee,
            },
          ),
          'SimpleBEP20: supply cannot be zero',
        );
      });
    });

    describe('with initial supply', function () {
      beforeEach(async function () {
        this.token = await SimpleBEP20.new(
          _name,
          _symbol,
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

  context('SimpleBEP20 token behaviours', function () {
    beforeEach(async function () {
      this.token = await SimpleBEP20.new(
        _name,
        _symbol,
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

    context('like a GeneratorCopyright', function () {
      beforeEach(async function () {
        this.instance = this.token;
      });

      shouldBehaveLikeGeneratorCopyright(version);
    });
  });
});
