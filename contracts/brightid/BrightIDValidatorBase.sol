// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IBrightIDValidator.sol";

abstract contract BrightIDValidatorBase is Ownable, IBrightIDValidator {
    bytes32 private _context;

    constructor(bytes32 context_) {
        _context = context_;
    }

    /**
     * @dev Set `_context` to `context_`.
     *
     * Requirements:
     *
     * - the caller must be the owner.
     */
    function setContext(bytes32 context_) external virtual onlyOwner {
        _context = context_;
    }

    /**
     * @dev See {IBrightIDValidator-context}.
     */
    function context() public view virtual override returns (bytes32) {
        return _context;
    }
}
