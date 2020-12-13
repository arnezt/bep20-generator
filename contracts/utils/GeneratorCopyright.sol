// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

/**
 * @title GeneratorCopyright
 * @author BEP20 Generator (https://vittominacori.github.io/bep20-generator)
 * @dev Implementation of the GeneratorCopyright
 */
contract GeneratorCopyright {

    string private constant _GENERATOR = "https://vittominacori.github.io/bep20-generator";
    string private _version;

    constructor (string memory version_) {
        _version = version_;
    }

    /**
     * @dev Returns the token generator tool.
     */
    function generator() public pure returns (string memory) {
        return _GENERATOR;
    }

    /**
     * @dev Returns the token generator version.
     */
    function version() public view returns (string memory) {
        return _version;
    }
}
