module.exports = {
  'rules': {
    // Ignore module resolutions
    'import/no-unresolved': 0,

    // disallow non-import statements appearing before import statements
    // TODO - get this working
    'import/first': 'off',

    // Ensure consistent use of file extension within the import path
    // TODO - get this working
    'import/extensions': 'off',

    // Forbid the use of extraneous packages - disabling because this rule doesn't
    // work very well
    'import/no-extraneous-dependencies': [0],

    // Default exports are going out of style and go against the grain of using indexes
    'import/prefer-default-export': 0,

    // Allow importing the default export as the name of one of the named exports
    'import/no-named-as-default': 0,

    // Allow exports to be declared higher up in the module
    'import/exports-last': 0
  }

};
