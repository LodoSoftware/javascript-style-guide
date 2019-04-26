module.exports = {
  plugins: ['import'],
  rules: {
    // Default exports are optional
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Named exports are fine
    'import/no-named-export': 'off',

    // Allow named export to be same as default
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',

    // Allow exports to be declared higher up in the module
    // https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
    'import/exports-last': 'off',

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always'
      }
    ],

    // New rules

    // Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
    'import/group-exports': 'off',

    // forbid default exports. this is a terrible rule, do not use it.
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // Forbid a module from importing itself
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Forbid cyclical dependencies between modules
    // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    // 'import/no-cycle': ['error', { maxDepth: Infinity }],
    // Not working quite right with typescript
    'import/no-cycle': 'off',

    // Ensures that there are no useless path segments
    // https://github.com/benmosher/eslint-plugin-import/issues/1032
    'import/no-useless-path-segments': 'error',

    // Not working currently with typescript
    'import/export': 'off',
    'import/named': 'off',

    // This is not working for us
    'import/no-extraneous-dependencies': 'off',

    // Unused
    'import/no-unused-modules': 'off'
  }
};
