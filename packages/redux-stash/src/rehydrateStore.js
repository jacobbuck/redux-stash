import { REQUEST_REHYDRATE } from './actionTypes';

const rehydrateStore = (store) => store.dispatch({ type: REQUEST_REHYDRATE });

export default rehydrateStore;
