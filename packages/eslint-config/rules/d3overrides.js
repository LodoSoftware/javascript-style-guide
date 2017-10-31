module.exports = {
  // D3 Overrides
  'rules': {
    // allow trailing commas in object literals
    'comma-dangle': [2, 'never'],

    // specify the maximum length of a line in your program
    'max-len': [1, 200, 2, {
      'ignoreUrls': true,
      'ignoreComments': false,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 0,

    // enforce padding within blocks
    'padded-blocks': [0, 'never'],

    // require return statements to either always or never specify values
    'consistent-return': 0,

    // allow spacing inside array brackets
    'array-bracket-spacing': 0,

    // allow dangling underscores in variable names
    'no-underscore-dangle': 0,

    // allow use of classes and functions before they are defined
    'no-use-before-define': [1, { 'classes': false, 'functions': false }],

    // allow use of Object.prototypes builtins directly
    'no-prototype-builtins': [0],

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['off', {
      exceptMethods: [],
    }],

    // Allow chaining of assignment of variables
    'no-multi-assign': ['off'],
  }
};
