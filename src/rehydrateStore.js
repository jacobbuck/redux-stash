import { REHYDRATE } from './actionTypes';

const rehydrateStore = store =>
  store.dispatch({
    type: REHYDRATE,
  });

export default rehydrateStore;
