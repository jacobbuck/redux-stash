import { REHYDRATE } from '../actionTypes';
import rehydrateStore from '../rehydrateStore';

test('dispatches REHYDRATE action on store ', () => {
  const store = { dispatch: jest.fn() };
  rehydrateStore(store);
  expect(store.dispatch).toHaveBeenCalledWith({ type: REHYDRATE });
});
