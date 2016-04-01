module.exports = {
  extends: [
    'eslint-config-d3banking/legacy',
    'eslint-config-d3banking/rules/es6',
    'eslint-config-d3banking/rules/strict',
    'eslint-config-d3banking/rules/d3overrides'
  ].map(require.resolve),
  rules: {}
};