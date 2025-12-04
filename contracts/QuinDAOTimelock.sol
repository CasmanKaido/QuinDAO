// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts@4.9.3/governance/TimelockController.sol";

/**
 * @title QuinDAOTimelock
 * @dev Timelock controller for QuinDAO governance
 * Simplified deployment - roles can be granted after deployment
 */
contract QuinDAOTimelock is TimelockController {
    constructor(
        uint256 minDelay,
        address admin
    ) TimelockController(
        minDelay,
        new address[](0),  // Empty proposers array - grant role after deployment
        new address[](0),  // Empty executors array - grant role after deployment  
        admin
    ) {}
}
