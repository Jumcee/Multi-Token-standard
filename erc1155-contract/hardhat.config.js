require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { PRIVATE_KEY, API_URL } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
};
