// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title QuinToken
 * @dev ERC20 governance token for QuinDAO
 * Compatible with older EVM versions
 */
contract QuinToken is ERC20, ERC20Burnable, ERC20Permit, ERC20Votes, Ownable {
    constructor(address initialOwner)
        ERC20("QuinDAO Token", "QUIN")
        ERC20Permit("QuinDAO Token")
        Ownable(initialOwner)
    {
        _mint(initialOwner, 100_000_000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}
