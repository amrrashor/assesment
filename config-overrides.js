//this file is meant to add alias to the path of every import in order to make it more clean and neat!
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@screens': 'src/screens',
    '@routes': 'src/routes',
    '@apis': 'src/utils/APIs.js',
    '@utils': 'src/utils',
    '@atoms': 'src/components/Atoms',
    '@molecules': 'src/components/Molecules',
    '@organisms': 'src/components/Organisms',
  })(config);

  return config;
};