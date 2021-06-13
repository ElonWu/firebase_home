// const path = require('path');

module.exports = {
  title: 'ElonWu Site',

  favicon: 'favicon.png',
  description: 'ElonWu Site',
  keywords: ['ElonWu', '吴渊'],
  shareOptions: [
    {
      property: 'og:title',
      content: 'ElonWu Site',
    },

    {
      property: 'og:site_name',
      content: 'ElonWu Site',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'ElonWu Site',
    },
    {
      property: 'og:description',
      content: '非你莫属，职等你来。',
    },
    {
      property: 'og:image',
      content: 'https://elonwu-3cb09.web.app/src/assets/logo.png',
    },
    {
      property: 'twitter:card',
      content: 'summary',
    },
    {
      property: 'twitter:site',
      content: '@bbgame',
    },
    {
      property: 'twitter:creator',
      content: '@bbgame',
    },
    {
      property: 'twitter:domain',
      content: 'https://elonwu-3cb09.web.app',
    },
  ],

  defines: {
    appName: 'ELonWuSite',
  },

  pwa: true,

  externals: {
    // lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js', '_'],
    // moment: [
    //   'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
    //   'moment',
    // ],
    // '@antv/g2': 'https://cdn.bootcdn.net/ajax/libs/antv-g2/4.1.12/g2.min.js',
    // // 'framer-motion':
    // //   'https://cdn.jsdelivr.net/npm/framer-motion@4.1.16/dist/framer-motion.js',
    // // antd: 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.3/antd.min.js',
    // react: [
    //   'https://unpkg.com/react@16.12.0/umd/react.production.min.js',
    //   'React',
    // ],
    // 'react-dom': [
    //   'https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js',
    //   'ReactDOM',
    // ],
    // 'react-router-dom':
    //   'ReactRouter@https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js',
    // lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js', '_'],
    // moment: [
    //   'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
    //   'moment',
    // ],
    // '@antv/g2': 'https://cdn.bootcdn.net/ajax/libs/antv-g2/4.1.12/g2.min.js',
    // 'framer-motion':
    //   'https://cdn.jsdelivr.net/npm/framer-motion@4.1.16/dist/framer-motion.js',
    // antd: 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.12.3/antd.min.js',
    // react: 'React@https://unpkg.com/react@16.12.0/umd/react.production.min.js',
    // 'react-dom':
    //   'ReactDOM@https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js',
    // 'react-router-dom':
    //   'ReactRouter@https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js',
  },

  devServer: {
    port: 8002,
  },

  DEV_BASEURL: '-',
  TEST_BASEURL: '-',
  RELEASE_BASEURL: '-',
};
