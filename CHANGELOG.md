# Changelog

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