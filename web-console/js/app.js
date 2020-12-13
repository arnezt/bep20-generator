/* global Web3, TruffleContract */

const App = {
  web3Provider: null,
  contracts: [],
  sc: {},
  load: function (contracts) {
    this.contracts = contracts;
    return this.initWeb3();
  },
  initWeb3: async function () {
    if (typeof window.ethereum !== 'undefined') {
      console.log('injected web3');
      this.web3Provider = window.ethereum;
      await this.web3Provider.enable();
    } else if (typeof window.web3 !== 'undefined') {
      console.log('injected web3 (legacy');
      this.web3Provider = window.web3.currentProvider;
    } else {
      console.log('provided web3');
      this.web3Provider = new Web3.providers.HttpProvider('https://127.0.0.1:9545');
      window.web3 = new Web3(this.web3Provider);
    }

    return this.initContracts();
  },
  initContracts: function () {
    this.contracts.forEach((contractName) => {
      this.getContract(contractName);
    });
  },
  getContract: async function (contractName) {
    fetch(`${contractName}.json`)
      .then((response) => response.json())
      .then((contract) => {
        this.sc[contractName] = TruffleContract(contract);
        this.sc[contractName].setProvider(this.web3Provider);
      })
      .catch(error => console.log(error));
  },
};

App.load(['SimpleBEP20', 'StandardBEP20', 'ServiceReceiver']);
