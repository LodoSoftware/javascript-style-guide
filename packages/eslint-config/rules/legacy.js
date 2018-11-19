module.exports = {
  rules: {
    // TEMPORARY WARNINGS - we will want to remove these settings eventually, but we'll keep them as warnings for now.

    // ES6 warnings
    'no-var': 1,
    'object-shorthand': [1, 'always'],

    // too many to change all at once
    'key-spacing': [1, { beforeColon: false, afterColon: true }],
    'object-curly-spacing': [1, 'always'],
    'no-nested-ternary': 1,
    'prefer-template': 1,
    'prefer-arrow-callback': 1,
    'one-var-declaration-per-line': 1,
    'newline-per-chained-call': [1, { ignoreChainWithDepth: 3 }],
    'global-require': 1,

    // allow reassignment of function parameters
    // allow parameter object manipulation
    'no-param-reassign': 'warn',

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'warn',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 1,

    // disallow un-paren'd mixes of different operators
    // eventually might want to add this in
    'no-mixed-operators': 0,

    // prefer destructuring from arrays and objects
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // enforce line breaks between braces
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true }
      }
    ],

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['warn', 'multiline'],

    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [
      'warn',
      'as-needed',
      {
        requireForBlockBody: true
      }
    ]
  }
};
