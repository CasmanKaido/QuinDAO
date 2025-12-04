// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title QuinToken
 * @dev ERC20 governance token for QuinDAO
 * Implements voting power and delegation
 */
contract QuinToken is ERC20, ERC20Burnable, ERC20Votes, Ownable {
    constructor(address initialOwner)
        ERC20("QuinDAO Token", "QUIN")
        ERC20Permit("QuinDAO Token")
        Ownable(initialOwner)
    {
        // Mint initial supply to owner (100 million tokens)
        _mint(initialOwner, 100_000_000 * 10 ** decimals());
    }

    /**
     * @dev Mint new tokens (only owner)
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

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
