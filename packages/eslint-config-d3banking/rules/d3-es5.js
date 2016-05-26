module.exports = {

  'rules': {
    'no-var': 0,
    'object-shorthand': 0,
    'prefer-template': 0,
    'prefer-arrow-callback': 0,
    'prefer-rest-params': 0,
    'import/no-amd': 0,

    // Temp warnings
    'space-before-blocks': 1,
    'spaced-comment': [
      1, 'always', {
        'exceptions': [ '-', '+' ],
        'markers': [ '=', '!' ]           // space here to support sprockets directives
      }
    ],
    'space-infix-ops': 1,
    'no-else-return': 1,
    'no-shadow': 1,
    'space-in-parens': [ 1, 'never' ],
    'no-multi-spaces': 1,
    'no-unneeded-ternary': [ 1, { 'defaultAssignment': false } ],
    'default-case': [ 1, { 'commentPattern': '^no default$' } ],
    'semi-spacing': [ 1, { 'before': false, 'after': true } ],
    'block-spacing': [ 1, 'always' ],
    'new-cap': [ 1, { 'newIsCap': true } ],
    'yoda': 1,
    'no-throw-literal': 1,
    'no-spaced-func': 1,
    'brace-style': [ 1, '1tbs', { 'allowSingleLine': true } ],
    'no-useless-concat': 1,
    'no-empty': 1,
    'no-useless-escape': 1,
    'no-control-regex': 1,
    'array-callback-return': 1,
    'computed-property-spacing': [ 1, 'never' ],
    'no-cond-assign': [ 1, 'always' ]
  }

};
