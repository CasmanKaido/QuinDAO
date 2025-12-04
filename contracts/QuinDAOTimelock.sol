// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts@4.9.3/governance/TimelockController.sol";

/**
 * @title QuinDAOTimelock
 * @dev Timelock controller for QuinDAO governance
 */
contract QuinDAOTimelock is TimelockController {
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) TimelockController(minDelay, proposers, executors, admin) {}
}
