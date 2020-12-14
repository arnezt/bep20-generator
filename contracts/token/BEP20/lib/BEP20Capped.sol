// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "./BEP20.sol";

/**
 * @dev Extension of {BEP20} that adds a cap to the supply of tokens.
 */
abstract contract BEP20Capped is BEP20 {
    using SafeMath for uint256;

    uint256 private _cap;

    /**
     * @dev Sets the value of the `cap`. This value is immutable, it can only be
     * set once during construction.
     */
    constructor (uint256 cap_) {
        require(cap_ > 0, "BEP20Capped: cap is 0");
        _cap = cap_;
    }

    /**
     * @dev Returns the cap on the token's total supply.
     */
    function cap() public view returns (uint256) {
        return _cap;
    }

    /**
     * @dev See {BEP20-_beforeTokenTransfer}.
     *
     * Requirements:
     *
     * - minted tokens must not cause the total supply to go over the cap.
     */
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);

        if (from == address(0)) { // When minting tokens
          require(totalSupply().add(amount) <= _cap, "BEP20Capped: cap exceeded");
        }
    }
}
