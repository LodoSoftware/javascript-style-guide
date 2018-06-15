module.exports = {
  rules: {
    // Errors
    'trailing-comma': [true, {
      'multiline': 'never',
      'singleline': 'never'
    }],
    'variable-name': [true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore'
    ],
    'no-unused-variable': [true, 'React'],
    'no-else-after-return': [true, 'allow-else-if'],

    // Warnings
    'max-line-length': {
      'severity': 'warn',
      'options': 200
    },

    // Excludes
    'member-access': false,
    'ordered-imports': [false],
    'object-literal-sort-keys': false,
    'member-ordering': [false],
    'interface-name': [false],
    'import-name': [false],

    // Excludes - React
    'jsx-boolean-value': false, // booleans are more concise
    'jsx-no-lambda': false  // consider using this
  }
}
