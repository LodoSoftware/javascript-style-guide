# @d3banking/eslint-config

[![NPM version](https://img.shields.io/npm/v/@d3banking/eslint-config.svg?style=flat)](https://www.npmjs.com/package/@d3banking/eslint-config)
[![Downloads](https://img.shields.io/npm/dm/@d3banking/eslint-config.svg)](https://www.npmjs.com/package/@d3banking/eslint-config)

This package provides D3 Banking's .eslintrc as an extensible shared config.

## Usage

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
