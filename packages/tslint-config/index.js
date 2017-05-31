const tslintRules = require('tslint/lib/configs/recommended');
const d3Overrides = require('./rules/d3overrides');

module.exports = {
  rules: Object.assign({}, tslintRules.rules, d3Overrides.rules),
  jsRules: Object.assign({}, tslintRules.jsRules)
};
