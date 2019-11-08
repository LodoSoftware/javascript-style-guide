module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'header-max-length': [2, 'always', 100],
    'subject-full-stop': [0],
    'subject-case': [0]
  }
};
