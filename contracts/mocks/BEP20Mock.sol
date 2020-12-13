// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "../token/BEP20/lib/BEP20.sol";

// mock class using BEP20
contract BEP20Mock is BEP20 {

    constructor (
        string memory name,
        string memory symbol,
        address initialAccount,
        uint256 initialBalance
    ) BEP20(name, symbol) {
        _mint(initialAccount, initialBalance);
    }
}
