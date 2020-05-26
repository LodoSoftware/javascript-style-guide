module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/imports',
    './rules/react',
    './rules/testing-library',
    './rules/d3overrides'
  ].map(require.resolve),
  rules: {}
};
