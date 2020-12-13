const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;

function shouldBehaveLikeBEP20Mintable (initialBalance, [minter, thirdParty]) {
  describe('mint', function () {
    const initialSupply = new BN(initialBalance);
    const amount = new BN(50);

    const from = minter;

    context('behaviours', function () {
      it('rejects a null account', async function () {
        await expectRevert(
          this.token.mint(ZERO_ADDRESS, amount, { from: minter }),
          'BEP20: mint to the zero address',
        );
      });

      describe('for a non null account', function () {
        beforeEach('minting', async function () {
          const { logs } = await this.token.mint(thirdParty, amount);
          this.logs = logs;
        });

        it('increments totalSupply', async function () {
          const expectedSupply = initialSupply.add(amount);
          (await this.token.totalSupply()).should.be.bignumber.equal(expectedSupply);
        });

        it('increments thirdParty balance', async function () {
          (await this.token.balanceOf(thirdParty)).should.be.bignumber.equal(amount);
        });

        it('emits Transfer event', async function () {
          const event = expectEvent.inLogs(this.logs, 'Transfer', {
            from: ZERO_ADDRESS,
            to: thirdParty,
          });

          event.args.value.should.be.bignumber.equal(amount);
        });
      });

      context('for a zero amount', function () {
        shouldMint(new BN(0));
      });

      context('for a non-zero amount', function () {
        shouldMint(amount);
      });

      function shouldMint (amount) {
        beforeEach(async function () {
          ({ logs: this.logs } = await this.token.mint(thirdParty, amount, { from }));
        });

        it('mints the requested amount', async function () {
          (await this.token.balanceOf(thirdParty)).should.be.bignumber.equal(amount);
        });

        it('emits a transfer event', async function () {
          expectEvent.inLogs(this.logs, 'Transfer', {
            from: ZERO_ADDRESS,
            to: thirdParty,
            value: amount,
          });
        });
      }
    });

    context('before finish minting', function () {
      it('mintingFinished should be false', async function () {
        (await this.token.mintingFinished()).should.be.equal(false);
      });
    });

    context('after finish minting', function () {
      beforeEach(async function () {
        ({ logs: this.logs } = await this.token.finishMinting({ from }));
      });

      it('should emit MintFinished', async function () {
        expectEvent.inLogs(this.logs, 'MintFinished');
      });

      it('mintingFinished should be true', async function () {
        (await this.token.mintingFinished()).should.be.equal(true);
      });

      it('cannot mint more tokens', async function () {
        await expectRevert(
          this.token.mint(thirdParty, 1, { from }),
          'BEP20Mintable: minting is finished',
        );
      });

      it('cannot finish minting again', async function () {
        await expectRevert(
          this.token.finishMinting({ from }),
          'BEP20Mintable: minting is finished',
        );
      });
    });
  });
}

module.exports = {
  shouldBehaveLikeBEP20Mintable,
};
