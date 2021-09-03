module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('./rules/strict'),
    require.resolve('./rules/imports'),
    require.resolve('./rules/react'),
    require.resolve('./rules/react-a11y'),
    require.resolve('./rules/react-hooks'),
    require.resolve('./rules/d3overrides'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/typescript-typechecking'),
    require.resolve('./rules/ncr')
  ],
  rules: {}
};
