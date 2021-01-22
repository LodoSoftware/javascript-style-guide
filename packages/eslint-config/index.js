module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/imports',
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/d3overrides',
    './rules/ncr'
  ].map(require.resolve),
  rules: {}
};
