module.exports = {
  description: 'Create an BEP20 Token in less than a minute with the new Smart Contract Generator for BEP20 Token. No login. No setup. No coding required.',
  base: '/bep20-generator/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://vittominacori.github.io/bep20-generator/assets/images/bep20-token-generator.png' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://vittominacori.github.io/bep20-generator/assets/images/bep20-token-generator.png' }], // eslint-disable-line max-len
    ['script', { src: '/assets/js/web3.min.js' }],
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1', // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-115756440-2',
    }],
    ['vuepress-plugin-facebook-pixel', {
      pixelId: '373489733749849',
    }],
  ],
  defaultNetwork: 'mainnet',
};
