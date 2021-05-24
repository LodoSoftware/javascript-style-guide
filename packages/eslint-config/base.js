module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('./rules/strict'),
    require.resolve('./rules/imports'),
    require.resolve('./rules/d3overrides'),
    require.resolve('./rules/ncr')
  ],
  rules: {}
};
