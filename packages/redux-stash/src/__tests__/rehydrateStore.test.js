import { REQUEST_REHYDRATE } from '../actionTypes';
import rehydrateStore from '../rehydrateStore';

test('dispatches REQUEST_REHYDRATE action on store ', () => {
  const dispatch = jest.fn();
  const store = { dispatch };
  rehydrateStore(store);
  expect(dispatch).toHaveBeenCalledWith({ type: REQUEST_REHYDRATE });
});
