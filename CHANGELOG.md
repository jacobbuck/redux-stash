# Changelog

## Unreleased

### redux-stash

### Added

- Added [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) dependency.

#### Changed

- Changed type checking to use `invariant` function from [tiny-invariant](https://www.npmjs.com/package/tiny-invariant).
- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.14.8.

### redux-stash-async-storage

#### Added

- Set `"sideEffects": false` in [package.json](./packages/redux-stash-async-storage/package.json).

#### Changed

- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.14.8.

### redux-stash-cookie-storage

#### Added

- Added [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) dependency.
- Set `"sideEffects": false` in [package.json](./packages/redux-stash-cookie-storage/package.json).

#### Changed

- Changed type checking to use `invariant` function from [tiny-invariant](https://www.npmjs.com/package/tiny-invariant).
- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.14.8.

## v1.2.0 - 2020-12-19

### redux-stash

#### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) for Babel helpers.
- Added source maps to build output.

#### Changed

- Refactored internal caching to reduce unnecessary I/O calls and refresh on hydrate.
- Updated devDependencies.

### redux-stash-async-storage

#### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) for Babel helpers.
- Added source maps to build output.

### redux-stash-cookie-storage

#### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) for Babel helpers.
- Added source maps to build output.

## v1.1.0 - 2020-07-25

### redux-stash

#### Added

- Added `REQUEST_REHYDRATE` action type for requesting rehydration.

#### Changed

- Refactored internal state of middleware.
- Updated middleware to take `REQUEST_REHYDRATE` action and dispatch `REHYDRATE` action.
- Updated `rehydrateStore` to dispatch `REQUEST_REHYDRATE` action.

## v1.0.1 - 2020-07-24

### redux-stash

#### Changed

- Updated devDependencies.

#### Removed

- Removed redundant `try`/`catch` blocks for lighter code.

### redux-stash-async-storage

#### Fixed

- Fixed a bug in the type-checking of `AsyncStorage`.

### redux-stash-cookie-storage

#### Removed

- Removed redundant `try`/`catch` blocks for lighter code.

## v1.0.0 - 2020-07-10

Initial public version! :tada:
