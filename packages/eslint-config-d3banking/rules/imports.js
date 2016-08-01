module.exports = {

  'rules': {
    // Ignore module resolutions
    'import/no-unresolved': 0,

    // disallow non-import statements appearing before import statements
    'import/imports-first': [0],

    // Forbid the use of extraneous packages - disabling because this rule doesn't
    // work very well
    'import/no-extraneous-dependencies': [0],

    // Temporary Warnings
    'import/no-amd': 1
  }

};
