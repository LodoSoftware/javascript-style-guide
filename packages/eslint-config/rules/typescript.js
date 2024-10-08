module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json']
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs']
      }
    },
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },
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
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false
      }
    ],

    // disallow empty functions, except for standalone funcs/arrows
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
          'protected-constructors',
          'private-constructors'
        ]
      }
    ],

    // This rule goes against typescripts inference and adds friction to devs
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Use typescript version of this rule
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Use typescript version of this rule
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn', { classes: false, functions: false }],

    // Typescript handles this
    'import/no-unresolved': 'off',

    // Enforce PascalCase for interfaces, classes and types
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['class', 'interface', 'typeAlias'],
        format: ['PascalCase']
      }
    ]
  }
};
