module.exports = {
  extends: [
    'eslint-config-airbnb/legacy',
    'eslint-config-airbnb/rules/es6',
    'eslint-config-airbnb/rules/strict',
    'eslint-config-airbnb/rules/d3overrides'
  ].map(require.resolve),
  rules: {}
};