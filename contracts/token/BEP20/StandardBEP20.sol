// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "./lib/BEP20.sol";

import "../../service/ServicePayer.sol";

/**
 * @title StandardBEP20
 * @dev Implementation of the StandardBEP20
 */
contract StandardBEP20 is BEP20, ServicePayer {

    constructor (
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialBalance,
        address payable feeReceiver
    )
        BEP20(name, symbol)
        ServicePayer(feeReceiver, "StandardBEP20")
        payable
    {
        require(initialBalance > 0, "StandardBEP20: supply cannot be zero");

        _setupDecimals(decimals);
        _mint(_msgSender(), initialBalance);
    }
}
