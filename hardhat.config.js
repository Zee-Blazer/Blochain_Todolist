/** 
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "volta",
  networks: {
    hardhat: {},
    volta: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 210000000,
      gasPrice: 800000000000,
    }
  }
};