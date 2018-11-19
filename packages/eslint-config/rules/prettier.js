const path = require('path');

module.exports = {
  extends: [path.resolve(require.resolve('eslint-config-prettier'))],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100
      }
    ]
  }
};
