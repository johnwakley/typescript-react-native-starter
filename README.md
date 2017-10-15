# TypeScript React Native Starter
A starter template for TypeScript and React Native.

This template was inspired by Microsoft's [TypeScript React Native Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter).

It builds on top of this foundation by adding the following:
- `--strict` compiler flag to enable all strict type-checking options
- `tslint:latest` preset and [tslint-react](https://github.com/palantir/tslint-react) custom rule set
- [Prettier](https://github.com/prettier/prettier) TypeScript code formatting
- git add, commit and push hooks via [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to lint and format code, and run unit tests

## Overview
Using TypeScript with React Native requires an extra TypeScript compilation step before the usual React Native bundler operations take place.

`tsconfig.json` instructs the TypeScript compiler to build any TypeScript files (`.ts, .tsx`) under `/src` and direct the resulting transpiled ES6 code to `/lib`, whereby the React Native bundler can then continue as normal.

All of this can be accomplished using the following helper scripts:
- `yarn run-ios`
- `yarn run-android`

Both versions will run `tslint` and unit tests before deploying a successful build to the respective device simulator/emulator.

## Scripts
`yarn run-ios` or `yarn run-android` are the only scripts you'll need to run during development. Both make use of a few of these other helper scripts, which can be run individually:

`test`
- run unit and snapshot tests

`lint`
- run tslint analysis across `.ts` and `.tsx` files

`lint-fix`
- attempts to automatically fix any linting issues

`build`
- lints, tests and compiles TypeScript code 

`prettier`
- format TypeScript code according to Prettier rules

`precommit`
- runs `build` script prior to `git commit` and fails the `commit` operation on any errors

`prepush`
- runs `build` script prior to `git push` and fails the `push` operation on any errors


## TODO
- Update to new react-native 45+ approach
  - https://github.com/Microsoft/TypeScript-React-Native-Starter/issues/8
- Enable Enzyme tests once this issue is fixed:
  - https://github.com/airbnb/enzyme/issues/928
- Storybook for React Native
  - https://github.com/storybooks/storybook/tree/master/app/react-native