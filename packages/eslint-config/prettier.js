module.exports = {
  extends: [
    path.resolve(require.resolve('eslint-config-prettier')),
    path.resolve(require.resolve('eslint-config-prettier/@typescript-eslint')),
    path.resolve(require.resolve('eslint-config-prettier/react'))
  ],
  rules: {}
};
