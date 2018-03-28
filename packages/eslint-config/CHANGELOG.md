13.1.1 / 2018-3-28
==================
- [deps] Update version of `eslint-plugin-flowtype` to `v2.46.1`

13.0.0 / 2017-12-4
===================
- [breaking] Move old rule warnings to new legacy package
- [breaking] Added React rules to main package
- [breaking] Added base package for basic javascript projects
- [breaking] Added flow plugin and package for flow based projects
- [deps] Update to latest version of configs and plugins

12.0.0 / 2017-8-11
==================
- [breaking] Update `eslint-config-airbnb-base` to `v11.3.1`
- [breaking] Remove `space-before-function-paren` and `indent` warnings
- [minor] Add support for `eslint v4`
- [deps] Update all dependencies to latest versions

11.2.0 / 2017-6-2
=================
- [minor] Change `no-param-reassign` to a warning

11.1.0 / 2017-5-31
==================
- [minor] Turn `no-plusplus` into a warning

11.0.0 / 2017-5-22
==================
- [breaking] Remove legacy ES5 support
- [breaking] Remove warnings for `one-var`, `keyword-spacing`, `comma-spacing`, `quote-props`, `strict`, `prefer-rest-params`, `import/no-amd`
- [breaking] Rename package to `@d3banking/eslint-config`
- [deps] Update `eslint-config-airbnb-base` to `v11.2.0`

10.0.1 / 2017-2-24
==================
- [patch] Remove rule property with dependency on ES7 exponentiation feature

10.0.0 / 2017-2-21
==================
- [breaking] Update `eslint-config-airbnb-base` to `v11.1.0`
- [deps] Update `eslint` and dev dependencies
- [minor] Add updated D3 overrides

9.1.0 / 2016-10-19
==================
- [minor] Added overrides to d3Overrides and imports for new rules

9.0.0 / 2016-10-18
==================
- [breaking] Update `eslint-config-airbnb-base` to `v9.0.0`

8.0.2 / 2016-08-15
==================
- [deps] Lock down dependency versions

8.0.1 / 2016-08-01
==================
- [deps] Update `eslint` to `v3.2`
- [breaking] Update `eslint-config-airbnb-base` to `v5.0.1`
- [minor] Add d3 specific overrides for new rules
- [breaking] Remove `angular`, `d3`, and `$` as globals

7.1.3 / 2016-05-26
==================
- [patch] disables the `array-bracket-spacing` rule since there are too many exceptions to the rule

7.1.2 / 2016-05-26
==================
- [patch] updated the `strict` rule to use correct options
- [patch] [es5] added additional rules to the es5 warnings list

7.1.1 / 2016-05-26
==================
- [patch] `space-before-function-paren` updated to be required for anonymous functions
- [patch] [es5] `func-names` are no longer required

7.1.0 / 2016-05-26
==================
- [minor] Added legacy ES5 support via `d3banking/legacy`

7.0.4 / 2016-05-20
==================
- [patch] allow use of classes and functions before defined

7.0.3 / 2016-05-18
==================
- [deps] fixing up dependencies for the import plugin
- [patch] tuning rules for current environment

7.0.0 / 2016-05-18
==================
- [breaking] introducing `eslint-config-d3banking` to v7.0.0 as a separate package