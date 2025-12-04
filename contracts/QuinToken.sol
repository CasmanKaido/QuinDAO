// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts@4.9.3/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.9.3/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.9.3/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts@4.9.3/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts@4.9.3/access/Ownable.sol";

/**
 * @title QuinToken
 * @dev ERC20 governance token for QuinDAO
 */
contract QuinToken is ERC20, ERC20Burnable, ERC20Permit, ERC20Votes, Ownable {
    constructor(address initialOwner)
        ERC20("QuinDAO Token", "QUIN")
        ERC20Permit("QuinDAO Token")
    {
        _transferOwnership(initialOwner);
        _mint(initialOwner, 100_000_000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}
