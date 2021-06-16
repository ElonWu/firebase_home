const path = require('path');

const config = {
  verbose: true,
  roots: ['src'],
  testRegex: '\\.test\\.jsx?$',
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules', 'antd', 'lib'),
    path.resolve(__dirname, 'node_modules', 'rc-trigger'),
  ],
};

module.exports = config;
