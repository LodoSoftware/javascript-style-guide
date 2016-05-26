module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/imports',
    './rules/d3overrides',
    './rules/d3-es5'
  ].map(require.resolve),
  rules: {}
};
