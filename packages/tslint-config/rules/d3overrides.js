module.exports = {
  rules: {
    // Errors
    'quotemark': [true, 'single'],
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

    // Warnings
    'max-line-length': {
      'severity': 'warn',
      'options': 200
    },
    'typedef': {
      'severity': 'warn',
      'options': [
        'call-signature',
        'parameter',
        'arrow-parameter',
        'property-declaration',
        'variable-declaration',
        'member-variable-declaration'
      ]
    },

    // Excludes
    'member-access': false,
    'ordered-imports': [false],
    'object-literal-sort-keys': false,
    'member-ordering': [false],
    'interface-name': [false],
    'interface-over-type-literal': false
  }
}
