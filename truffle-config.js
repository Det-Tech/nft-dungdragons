const HDWalletProvider = require('@cypherium/hdwallet-provider')
require('dotenv').config()
const fs = require('fs');
const mnemonic = fs.readFileSync(".env").toString().trim();
module.exports = {
  networks: {
     development: {
      provider: () => {
        return new HDWalletProvider(mnemonic,'http://localhost:8000')
      },
      network_id: '*',
      gas: 4048575,
      networkCheckTimeout: 100000,
      pollingInterval: 16000
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(mnemonic,  'https://pubnodestest.cypherium.io')
      },
      network_id: 12124,
      gas: 4048575,
      networkCheckTimeout: 100000,
      pollingInterval: 16000
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(mnemonic,  'https://pubnodes.cypherium.io')
      },
      network_id: 16162,
      gas: 4048575,
      networkCheckTimeout: 100000,
      pollingInterval: 16000
    },

  },
  compilers: {
      solc: {
          optimizer: {
              enabled: true,
              runs: 200
          }
      }
  },
  plugins: [
    'truffle-plugin-verify'
  ]
}
