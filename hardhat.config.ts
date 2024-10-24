import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
    // Lisk Sepolia Testnet
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [process.env.WALLET_KEY as string], // Load private key from .env file
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      "lisk-sepolia": "123", // Dummy API key for Lisk Sepolia to manage hardhat 
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com"
        }
      }
    ]
  }
};

export default config;
