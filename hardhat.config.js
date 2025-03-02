require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL,  // Ethereum mainnet RPC URL from Alchemy/Infura
      accounts: [process.env.PRIVATE_KEY],  // Your wallet private key
    },
  },
};
