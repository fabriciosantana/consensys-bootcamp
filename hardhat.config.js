const dotenv = require("dotenv");
dotenv.config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",

  networks: {

    local: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      from: `${process.env.FROM_ADDRESS_LOCAL}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY_LOCAL}`]
    },

    goerli: {
      url: "http://127.0.0.1:8545",
      chainId: 5,
      from: `${process.env.FROM_ADDRESS_LOCAL}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY_LOCAL}`]
    },
  }
};
