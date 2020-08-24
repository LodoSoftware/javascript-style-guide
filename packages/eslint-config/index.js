module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/imports',
    './rules/react',
    './rules/d3overrides',
    './rules/ncr'
  ].map(require.resolve),
  rules: {}
};
