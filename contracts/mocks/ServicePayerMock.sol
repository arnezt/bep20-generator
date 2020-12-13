// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "../service/ServicePayer.sol";

// mock class using ServicePayer
contract ServicePayerMock is ServicePayer {

    constructor (address payable feeReceiver) ServicePayer(feeReceiver, "ServicePayerMock") payable {}
}
