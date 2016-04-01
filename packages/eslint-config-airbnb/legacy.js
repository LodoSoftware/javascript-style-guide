module.exports = {
  extends: [
    'eslint-config-d3banking/rules/best-practices',
    'eslint-config-d3banking/rules/errors',
    'eslint-config-d3banking/rules/legacy',
    'eslint-config-d3banking/rules/node',
    'eslint-config-d3banking/rules/style',
    'eslint-config-d3banking/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
