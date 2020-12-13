// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "./ServiceReceiver.sol";

/**
 * @title ServicePayer
 * @dev Implementation of the ServicePayer
 */
abstract contract ServicePayer {

    constructor (address payable receiver, string memory serviceName) payable {
        ServiceReceiver(receiver).pay{value: msg.value}(serviceName);
    }
}
