const path = require('path');
const tslintConfig = require('tslint/lib/configs/recommended');
const airbnbConfig = require('tslint-config-airbnb');
const reactConfig = require('tslint-react');
const prettierConfig = require('tslint-config-prettier');
const d3Overrides = require('./rules/d3overrides');

module.exports = {
  rulesDirectory: airbnbConfig.rulesDirectory.concat([
    path.join(path.dirname(require.resolve('tslint-plugin-prettier')), './'),
    path.join(path.dirname(require.resolve('tslint-react')), './rules')
  ]),
  rules: Object.assign({},
    airbnbConfig.rules,
    reactConfig.rules,
    d3Overrides.rules,
    prettierConfig.rules, {
      prettier: [true, { singleQuote: true }]
    }
  ),
  jsRules: Object.assign({}, tslintConfig.jsRules)
};
