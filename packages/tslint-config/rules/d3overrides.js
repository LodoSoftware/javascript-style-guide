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
    'import-name': [true, { 'react': 'React' }],

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
    'jsx-boolean-value': false
  }
}
