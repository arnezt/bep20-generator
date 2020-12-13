const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;

const { expect } = require('chai');

function shouldBehaveLikeBEP20Burnable (initialBalance, [burner, thirdParty]) {
  describe('burn', function () {
    describe('when the given amount is not greater than balance of the sender', function () {
      context('for a zero amount', function () {
        shouldBurn(new BN(0));
      });

      context('for a non-zero amount', function () {
        shouldBurn(new BN(100));
      });

      function shouldBurn (amount) {
        beforeEach(async function () {
          ({ logs: this.logs } = await this.token.burn(amount, { from: burner }));
        });

        it('burns the requested amount', async function () {
          expect(await this.token.balanceOf(burner)).to.be.bignumber.equal(initialBalance.sub(amount));
        });

        it('emits a transfer event', async function () {
          expectEvent.inLogs(this.logs, 'Transfer', {
            from: burner,
            to: ZERO_ADDRESS,
            value: amount,
          });
        });
      }
    });

    describe('when the given amount is greater than the balance of the sender', function () {
      const amount = initialBalance.addn(1);

      it('reverts', async function () {
        await expectRevert(this.token.burn(amount, { from: burner }),
          'BEP20: burn amount exceeds balance',
        );
      });
    });
  });

  describe('burnFrom', function () {
    describe('on success', function () {
      context('for a zero amount', function () {
        shouldBurnFrom(new BN(0));
      });

      context('for a non-zero amount', function () {
        shouldBurnFrom(new BN(100));
      });

      function shouldBurnFrom (amount) {
        const originalAllowance = amount.muln(3);

        beforeEach(async function () {
          await this.token.approve(thirdParty, originalAllowance, { from: burner });
          const { logs } = await this.token.burnFrom(burner, amount, { from: thirdParty });
          this.logs = logs;
        });

        it('burns the requested amount', async function () {
          expect(await this.token.balanceOf(burner)).to.be.bignumber.equal(initialBalance.sub(amount));
        });

        it('decrements allowance', async function () {
          expect(await this.token.allowance(burner, thirdParty)).to.be.bignumber.equal(originalAllowance.sub(amount));
        });

        it('emits a transfer event', async function () {
          expectEvent.inLogs(this.logs, 'Transfer', {
            from: burner,
            to: ZERO_ADDRESS,
            value: amount,
          });
        });
      }
    });

    describe('when the given amount is greater than the balance of the sender', function () {
      const amount = initialBalance.addn(1);

      it('reverts', async function () {
        await this.token.approve(thirdParty, amount, { from: burner });
        await expectRevert(this.token.burnFrom(burner, amount, { from: thirdParty }),
          'BEP20: burn amount exceeds balance',
        );
      });
    });

    describe('when the given amount is greater than the allowance', function () {
      const allowance = new BN(100);

      it('reverts', async function () {
        await this.token.approve(thirdParty, allowance, { from: burner });
        await expectRevert(this.token.burnFrom(burner, allowance.addn(1), { from: thirdParty }),
          'BEP20: burn amount exceeds allowance',
        );
      });
    });
  });
}

module.exports = {
  shouldBehaveLikeBEP20Burnable,
};
