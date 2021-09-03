const path = require('path');

module.exports = {
  extends: [path.resolve(require.resolve('eslint-config-prettier'))],
  rules: {
    curly: 'error'
  }
};
