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
    '@typescript-eslint/no-object-literal-type-assertion': ['off'],

    // Warn on ts-ignore
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': true,
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false
    }],

    // disallow empty functions, except for standalone funcs/arrows
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    '@typescript-eslint/no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
        'protected-constructors',
        'private-constructors'
      ]
    }],

    // This rule goes against typescripts inference and adds friction to devs
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
