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
        prefix: ['is', 'should', 'has', 'can', 'did', 'will']
      },
      { selector: 'enumMember', format: ['PascalCase'] }
    ],

    // Warnings related to unexpected usages of the 'any' type
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',

    // Helps to catch unhandled nullability in string templates
    '@typescript-eslint/restrict-template-expressions': 'warn',

    // We basically never bind our methods, and it's not very applicable as we move away from class components
    '@typescript-eslint/unbound-method': 'off'
  }
};
