const tslintConfig = require('tslint/lib/configs/recommended');

module.exports = {
  extends: [
    'tslint-config-airbnb',
    'tslint-react',
    './rules/d3overrides'
  ].map(require.resolve),
  rules: {},
  jsRules: Object.assign({}, tslintConfig.jsRules)
};
