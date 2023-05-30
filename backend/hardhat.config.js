//https://eth-ropsten.alchemyapi.io/v2/-5iPcpXC08-x3y7xokPdq1hmQLXxHQgH

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-5iPcpXC08-x3y7xokPdq1hmQLXxHQgH',
      accounts: ['98111e60ab03d0f0c63dbb115b9ef09232dc55d7d89b5fc50da2e73dcfcd936d'],
    },
  },
};