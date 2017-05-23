# @d3banking/eslint-config

[![npm version](https://badge.fury.io/js/%40d3banking%2Feslint-config.svg)](https://badge.fury.io/js/%40d3banking%2Feslint-config)

This package provides D3 Banking's .eslintrc as an extensible shared config.

## Usage

### @d3banking/eslint-config

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`.

1. `npm install --save-dev @d3banking/eslint-config eslint`
2. add `"extends": "@d3banking/eslint-config"` to your .eslintrc


See [D3 Banking's Javascript styleguide](https://github.com/LodoSoftware/javascript-style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
