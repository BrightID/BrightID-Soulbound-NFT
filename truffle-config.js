require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(
        `${process.env.DEPLOYER_PRIVATE_KEY}`, `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 4,
      gas: 29000000,
      confirmations: 2
    },
    gnosis: {
      provider: () => new HDWalletProvider(
        `${process.env.DEPLOYER_PRIVATE_KEY}`, `https://poa-xdai.gateway.pokt.network/v1/lb/${process.env.PORTAL_KEY}`),
      network_id: 100,
      gas: 29000000,
      gasPrice: 1000000000,
      confirmations: 2,
      networkCheckTimeout: 10000000
    }
  },

  compilers: {
    solc: {
      version: "0.8.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      },
    },
  },

  plugins: [
    'truffle-plugin-stdjsonin'
  ]
}