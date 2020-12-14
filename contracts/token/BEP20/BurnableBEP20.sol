// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "./lib/BEP20Burnable.sol";

import "../../service/ServicePayer.sol";

/**
 * @title BurnableBEP20
 * @dev Implementation of the BurnableBEP20
 */
contract BurnableBEP20 is BEP20Burnable, ServicePayer {

    constructor (
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialBalance,
        address payable feeReceiver
    )
        BEP20(name, symbol)
        ServicePayer(feeReceiver, "BurnableBEP20")
        payable
    {
        require(initialBalance > 0, "BurnableBEP20: supply cannot be zero");

        _setupDecimals(decimals);
        _mint(_msgSender(), initialBalance);
    }
}
