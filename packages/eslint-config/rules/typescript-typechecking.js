module.exports = {
  extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
  rules: {
    // Only allow boolean variables with appropriate prefixes
    //  - PascalCase needed for reasons, it is really camelCase: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
    // Only allow PascalCase for enum members
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'allow', 'show']
      },
      { selector: 'enumMember', format: ['PascalCase'] }
    ],

    // Warnings related to unexpected usages of the 'any' type
    // Disabled because they are not quite useful
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',

    // Allow checking enums against primitives
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',

    // Helps to catch unhandled nullability in string templates
    // Disabled because they are not quite useful
    '@typescript-eslint/restrict-template-expressions': 'off',

    // We basically never bind our methods, and it's not very applicable as we move away from class components
    '@typescript-eslint/unbound-method': 'off',

    // Incorrectly detects whether a regex includes the g flag
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Allow returning promises for props like onClick
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ]
  }
};
