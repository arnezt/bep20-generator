export default {
  data () {
    return {
      tokenDetails: [
        {
          name: 'SimpleBEP20',
          version: '1.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: false,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: false,
          removeCopyright: false,
          price: 0,
        },
        {
          name: 'StandardBEP20',
          version: '1.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: false,
          removeCopyright: true,
          price: 0.1,
        },
      ],
    };
  },
};
