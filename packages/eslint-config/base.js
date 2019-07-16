module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/imports',
    './rules/d3overrides'
  ].map(require.resolve),
  rules: {}
};
