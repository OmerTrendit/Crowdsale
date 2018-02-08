const ONE_GWEI = Math.pow(10, 9);
const EIGHT_GWEI = 8 * ONE_GWEI;


const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require('web3');
var mnemonic = "hazard toss joke extend penalty better poem forest pledge wonder proof benefit";

module.exports = {
  networks: {
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/QqYyHoBmrSBj4DhqfTa7');
      },
      network_id: 1,
      gas: 6700000,
      gasPrice: ONE_GWEI * 10
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/QqYyHoBmrSBj4DhqfTa7 ');
      },
      network_id: 2,
      gas: 6721975
    },
  }
};
