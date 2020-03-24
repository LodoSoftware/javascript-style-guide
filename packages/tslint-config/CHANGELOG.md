# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.1](https://github.com/LodoSoftware/javascript-style-guide/compare/@d3banking/tslint-config@4.0.0...@d3banking/tslint-config@4.0.1) (2020-03-24)

**Note:** Version bump only for package @d3banking/tslint-config

# [4.0.0](https://github.com/LodoSoftware/javascript-style-guide/compare/@d3banking/tslint-config@3.3.0...@d3banking/tslint-config@4.0.0) (2019-08-01)

### Features

- **prettier:** remove prettier from main configuration ([cd72291](https://github.com/LodoSoftware/javascript-style-guide/commit/cd72291))

### BREAKING CHANGES

- **prettier:** Prettier was removed. Please use @d3banking/prettier-config instead.

# 3.3.0 (2019-07-16)

### Features

- **prettier:** added prettier config package with existing configuration ([547bf8a](https://github.com/LodoSoftware/javascript-style-guide/commit/547bf8a))

# 3.2.0 (2019-05-10)

### Features

- **REL31-1114:** Added typescript linting configuration. ([#4](https://github.com/LodoSoftware/javascript-style-guide/issues/4)) ([a015516](https://github.com/LodoSoftware/javascript-style-guide/commit/a015516))
- relaxing max-line and interface-over-type-literal rules. ([5b6a5fd](https://github.com/LodoSoftware/javascript-style-guide/commit/5b6a5fd))
- upgrade dependencies ([816ccb5](https://github.com/LodoSoftware/javascript-style-guide/commit/816ccb5))
- warnings for max-line-length and type-def ([9b769dd](https://github.com/LodoSoftware/javascript-style-guide/commit/9b769dd))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.2.0](https://github.com/LodoSoftware/javascript-style-guide/compare/v15.4.0...v3.2.0) (2019-05-10)

### Features

- upgrade dependencies ([816ccb5](https://github.com/LodoSoftware/javascript-style-guide/commit/816ccb5))

# 3.1.0 / 2018-11-19

- [deps] Update all versions to latest.

  # 3.0.0 / 2018-9-10

- [breaking] Set `max-line-length` to `100`
- [breaking] Enforce `ordered-imports`
- [minor] Upgrading deps (prettier, airbnb config)
- [fix] Remove deprecated `no-unused-variable`

  # 2.0.0 / 2018-7-11

- [breaking] Refactor all rules using airbnb and prettier configs as a baseline

  # 1.3.0 / 2017-8-11

- [minor] Change `interface-over-type-literal` to warning

  # 1.2.0 / 2017-6-2

- [minor] Change `max-line-length` and `type-def` to warnings

  # 1.1.0 / 2017-6-2

- [minor] Increasing line length for `max-line` rule
- [minor] Turn off `interface-over-type-literal` rule

  # 1.0.0 / 2017-5-31

- Initial TSLint configuration
