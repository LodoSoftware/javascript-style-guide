const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-plugin-prettier')), './')
  ],
  rules: {
    prettier: [true, {
      singleQuote: true,
      printWidth: 120
    }]
  }
};
