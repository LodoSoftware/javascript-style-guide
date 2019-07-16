# @d3banking/prettier-config

[![NPM version](https://img.shields.io/npm/v/@d3banking/prettier-config.svg?style=flat)](https://www.npmjs.com/package/@d3banking/prettier-config)
[![Downloads](https://img.shields.io/npm/dm/@d3banking/prettier-config.svg)](https://www.npmjs.com/package/@d3banking/prettier-config)

> This package provides D3 Banking's prettier configuration

## Usage

```
yarn add -D @d3banking/prettier-config
```

```
// package.json
{
  "name": "my-cool-library",
  "version": "1.0.0",
  "prettier": "@d3banking/prettier-config"
}
```

If using with ESLint, be sure to extend the prettier eslint config package in .eslintrc
```
// .eslintrc
{
  "extends": [
    "@d3banking/eslint-config",
    "@d3banking/eslint-config/prettier"
  ]
}
```
