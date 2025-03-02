// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EnergyTrade {
    IERC20 public energyToken;
    address public owner;

    event Trade(address indexed seller, address indexed buyer, uint256 amount, uint256 price);

    constructor(address _energyToken) {
        energyToken = IERC20(_energyToken);
        owner = msg.sender;
    }

    function tradeEnergy(address buyer, uint256 amount, uint256 price) external {
        require(energyToken.transferFrom(buyer, msg.sender, price), "Payment failed");
        emit Trade(msg.sender, buyer, amount, price);
    }
}
