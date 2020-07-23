# redux-stash

Persist and rehydrate parts or all of your Redux store.

## Getting started

Install with your favourite package manager:

```sh
npm install --save redux-stash
```

## Usage

```js
import { applyMiddleware, createStore } from 'redux';
import {
  REHYDRATE,
  createStash,
  createStashMiddleware,
  rehydrateStore,
  LocalStorage,
} from 'redux-stash';

const reducer = (state = { foo: '' }, action) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        foo: action.payload.foo
      };
    default:
      return state;
  }
};

const stashMiddleware = createStashMiddleware(
  createStash({
    name: 'foo',
    selector: state => state.foo,
    storage: new LocalStorage('foo'),
  });
);

const store = createStore(rootReducer, applyMiddleware(stashMiddleware));

rehydrateStore(store);
```
