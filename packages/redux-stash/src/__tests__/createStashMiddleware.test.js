import { applyMiddleware, createStore } from 'redux';
import { REHYDRATE } from '../actionTypes';
import createStash from '../createStashMiddleware';
import createStashMiddleware from '../createStashMiddleware';
import rehydrateStore from '../rehydrateStore';
import LocalStorage from '../storage/LocalStorage';

const UPDATE = 'update';

const reducer = (state = 'bar', action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.foo;
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
};

const selector = state => state;

beforeEach(() => {
  localStorage.clear();
});

test('', () => {
  const stashMiddleware = createStashMiddleware(
    createStash({
      name: 'foo',
      selector,
      storage: new LocalStorage('foo'),
    })
  );
  const store = configureStore(reducer, applyMiddleware(stashMiddleware));
});
