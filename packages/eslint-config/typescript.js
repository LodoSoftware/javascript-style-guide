module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'eslint-config-airbnb',
    'plugin:@typescript-eslint/recommended',
    require.resolve('./rules/imports'),
    require.resolve('./rules/react'),
    require.resolve('./rules/d3overrides'),
    require.resolve('./rules/prettier')
  ],
  plugins: ['@typescript-eslint'],
  rules: {}
};
