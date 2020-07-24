import { REQUEST_REHYDRATE } from '../actionTypes';
import rehydrateStore from '../rehydrateStore';

test('dispatches REQUEST_REHYDRATE action on store ', () => {
  const store = { dispatch: jest.fn() };
  rehydrateStore(store);
  expect(store.dispatch).toHaveBeenCalledWith({ type: REQUEST_REHYDRATE });
});
