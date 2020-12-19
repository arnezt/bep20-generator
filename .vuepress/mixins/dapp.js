import config from '../config';
import utils from './utils';

import SimpleBEP20 from '../abi/token/SimpleBEP20.json';
import StandardBEP20 from '../abi/token/StandardBEP20.json';
import BurnableBEP20 from '../abi/token/BurnableBEP20.json';
import MintableBEP20 from '../abi/token/MintableBEP20.json';
import CommonBEP20 from '../abi/token/CommonBEP20.json';

import ServiceReceiverArtifact from '../abi/service/ServiceReceiver.json';

export default {
  mixins: [
    utils,
  ],
  data () {
    return {
      web3: null,
      web3Provider: null,
      metamask: {
        installed: false,
        netId: null,
      },
      network: {
        default: config.defaultNetwork,
        current: null,
        map: {
          56: 'mainnet',
          97: 'testnet',
        },
        list: {
          mainnet: {
            web3Provider: 'https://bsc-dataseed.binance.org/',
            explorerLink: 'https://bscscan.com',
            id: 56,
            name: 'Binance Smart Chain',
          },
          testnet: {
            web3Provider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            explorerLink: 'https://testnet.bscscan.com',
            id: 97,
            name: 'Binance Smart Chain - Testnet',
          },
        },
      },
      serviceReceiver: {
        mainnet: '0x1Ce6597baB219e627Cc54Ecd8b6Bd613DDD5b4a1',
        testnet: '0x1f82770FCA99FdFB422eb863Ec6CA3CACc600cFB',
      },
      tokenList: {
        SimpleBEP20,
        StandardBEP20,
        BurnableBEP20,
        MintableBEP20,
        CommonBEP20,
      },
      contracts: {
        token: null,
        service: null,
      },
    };
  },
  methods: {
    async initWeb3 (network, checkWeb3) {
      if (!Object.prototype.hasOwnProperty.call(this.network.list, network)) {
        throw new Error(
          `Failed initializing network ${network}. Allowed values are ${Object.keys(this.network.list)}.`,
        );
      }

      if (checkWeb3 && (typeof window.ethereum !== 'undefined')) {
        console.log('injected ethereum'); // eslint-disable-line no-console
        this.web3Provider = window.ethereum;

        this.web3 = new Web3(this.web3Provider);
        this.metamask.installed = this.web3Provider.isMetaMask;

        const netId = await this.promisify(this.web3.eth.getChainId);
        this.metamask.netId = netId;

        if (netId !== this.network.list[network].id) {
          this.network.current = this.network.list[this.network.map[netId]];
          await this.initWeb3(network, false);
        }
      } else {
        console.log('provided ethereum'); // eslint-disable-line no-console
        this.network.current = this.network.list[network];
        this.web3Provider = new Web3.providers.HttpProvider(this.network.list[network].web3Provider);
        this.web3 = new Web3(this.web3Provider);
      }
    },
    initService (network) {
      this.contracts.service = new this.web3.eth.Contract(
        ServiceReceiverArtifact.abi,
        this.serviceReceiver[network],
      );
    },
    initToken (tokenType) {
      this.contracts.token = this.tokenList[tokenType];
      this.contracts.token.stringifiedAbi = JSON.stringify(this.contracts.token.abi);
    },
  },
};
