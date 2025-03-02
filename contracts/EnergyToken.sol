// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EnergyToken is ERC20, Ownable {

    // Constructor to initialize the ERC20 token and set the owner
    constructor(address initialOwner) ERC20("EnergyToken", "ETK") Ownable(initialOwner) {
        transferOwnership(initialOwner);  // Transfer ownership to the provided initial owner
        _mint(initialOwner, 1000000 * 10 ** decimals());  // Mint some tokens to the initial owner
    }

    // Additional functions can be added here if needed
}
