module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'type-annotations',
          'instance-variables',
          'lifecycle',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          'instance-methods',
          '/^on.+$/',
          '/^render.+$/',
          'render'
        ]
      }
    ],

    // Enforce fragment shorthand
    'react/jsx-fragments': ['error'],

    // Allow tsx
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // Conflicts with prettier
    'react/jsx-one-expression-per-line': 'off',

    // Ensure correct use of hooks
    'react-hooks/rules-of-hooks': 'error'
  }
};
