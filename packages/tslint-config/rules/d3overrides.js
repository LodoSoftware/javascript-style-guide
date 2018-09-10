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
    'no-else-after-return': [true, 'allow-else-if'],
    'ordered-imports': [true, {
      'grouped-imports': true,
      'import-sources-order': 'any'
    }],

    // Warnings
    'max-line-length': {
      'severity': 'warn',
      'options': 100
    },

    // Excludes
    'member-access': false,
    'object-literal-sort-keys': false,
    'member-ordering': [false],
    'interface-name': [false], // Interface names don't need to begin with capital I
    'import-name': [false], // name of the import module doesn't have to match the file name
    'object-shorthand-properties-first': false,
    'function-name': false, // add eventually, but react needs this off

    // Excludes - React
    'jsx-boolean-value': false, // booleans are more concise
    'jsx-no-lambda': false  // consider using this
  }
}
