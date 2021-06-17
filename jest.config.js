const path = require('path');

const config = {
  verbose: true,
  testRegex: '\\.test\\.jsx?$',
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(enzyme))'],
};

module.exports = config;
