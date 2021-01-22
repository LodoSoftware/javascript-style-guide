module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('./rules/imports'),
    require.resolve('./rules/react'),
    require.resolve('./rules/d3overrides'),
    require.resolve('./rules/ncr'),
    require.resolve('./rules/typescript')
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs']
      },
      webpack: true,
      typescript: true
    },
    'import/extensions': ['.ts', '.tsx', '.js', '.mjs', '.jsx']
  },
  rules: {}
};
