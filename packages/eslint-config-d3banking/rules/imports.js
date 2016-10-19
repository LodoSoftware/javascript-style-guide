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

    // Temporary Warnings
    'import/no-amd': 1
  }

};
