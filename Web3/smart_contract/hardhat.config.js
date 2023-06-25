require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/MbI7-FOiEo7r2gBesDMVTmGH7dUqwlJX',
      accounts: ['5feb077306db33ed7ae79b61dbe87eabdec5fcaf083457fdcc508a31c1697b2b'],
    },
  },
};