module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint'],
  rules: {
    // Allow return type to be inferred
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Allow explicitly marking something as 'any'
    '@typescript-eslint/no-explicit-any': 'off',

    // Don't require access modifiers on classes
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Allow marking something as defined using !
    // Eventually may want this
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Allow type assertion in call and new expression
    '@typescript-eslint/no-object-literal-type-assertion': [
      'error',
      {
        allowAsParameter: true
      }
    ]
  }
};
