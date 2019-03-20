module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'eslint-config-airbnb',
    require.resolve('./rules/imports'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/react'),
    require.resolve('./rules/d3overrides'),
    require.resolve('./rules/prettier')
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
