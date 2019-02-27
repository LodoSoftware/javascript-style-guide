const path = require('path');

module.exports = {
  extends: [
    path.resolve(require.resolve('eslint-config-prettier')),
    path.resolve(require.resolve('eslint-config-prettier/@typescript-eslint'))
  ],
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
