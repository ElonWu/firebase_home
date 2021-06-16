const config = {
  verbose: true,
  roots: ['src'],
  testRegex: '\\.test\\.jsx?$',
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
};

module.exports = config;
