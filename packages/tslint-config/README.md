# @d3banking/tslint-config

[![NPM version](https://img.shields.io/npm/v/@d3banking/tslint-config.svg?style=flat)](https://www.npmjs.com/package/@d3banking/tslint-config)
[![Downloads](https://img.shields.io/npm/dm/@d3banking/tslint-config.svg)](https://www.npmjs.com/package/@d3banking/tslint-config)

This package provides D3 Banking's tslint.json as an extensible shared config.

## Usage

Our default export contains all of our TSLint rules, including Typescript 2+ and ECMAScript 6+. It requires `tslint` and `typescript`.

1. `npm install --save-dev @d3banking/tslint-config tslint typescript`
2. add `"extends": "@d3banking/tslint-config"` to your `tslint.json`


See [D3 Banking's Javascript styleguide](https://github.com/LodoSoftware/javascript-style-guide) and
the [TSlint config docs](https://palantir.github.io/tslint/usage/configuration/)
for more information.

