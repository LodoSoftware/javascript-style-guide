module.exports = {
  plugins: ['testing-library'],
  extends: ['plugin:testing-library/react'],
  rules: {
    'testing-library/prefer-screen-queries': 'warn',
    'testing-library/no-node-access': 'warn'
  }
};
