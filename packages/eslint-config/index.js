module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/imports',
    './rules/react',
    './rules/d3overrides'
  ].map(require.resolve),
  rules: {}
};
