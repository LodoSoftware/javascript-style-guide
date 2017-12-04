module.exports = {
  'rules': {
    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        'order': [
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
  }
};
