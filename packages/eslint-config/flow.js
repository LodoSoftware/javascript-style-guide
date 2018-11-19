module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/imports',
    './rules/react',
    './rules/flow',
    './rules/d3overrides',
    './rules/prettier'
  ].map(require.resolve),
  rules: {}
};
