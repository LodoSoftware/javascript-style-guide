# eslint-config-d3banking

[![npm version](https://badge.fury.io/js/eslint-config-airbnb.svg)](http://badge.fury.io/js/eslint-config-airbnb)

This package provides D3 Banking's .eslintrc as an extensible shared config.

## Usage

### eslint-config-d3banking

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`.

1. `npm install --save-dev eslint-config-d3banking eslint`
2. add `"extends": "d3banking"` to your .eslintrc
2. add `"extends": "d3banking/legacy"` to your .eslintrc for ES5 projects


See [D3 Banking's Javascript styleguide](https://github.com/LodoSoftware/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
