/**
 * List of new rules vetted by NCR D3
 * This is a separate file for now to keep the new rules separate
 * This may get refactored at some point if we decide to go a
 * different direction with our ruleset
 */
module.exports = {
  rules: {
    // Return values in promise exectutors don't do anything
    // so this enforces empty return to prevent possible bugs
    'no-promise-executor-return': 'error',

    // Catch instances of loops that probably don't need to be loops
    'no-unreachable-loop': 'error',

    // Currently not enforcing strong variable names
    'id-denylist': 'off',

    // Disallow bracket-less if, else if, else, for, while, do
    curly: 'error'
  }
};
