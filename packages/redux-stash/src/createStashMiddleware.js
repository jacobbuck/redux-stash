import { REHYDRATE, REQUEST_REHYDRATE } from './actionTypes';
import { pluck, warning, zipObj } from './utilities';

const createStashMiddleware = (...stashes) => {
  const cache = new Map();
  const writableStashes = stashes.filter(({ readOnly }) => !readOnly);

  let internalState = 'INITIAL';

  return ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === REQUEST_REHYDRATE) {
      internalState = 'REHYDRATING';

      Promise.all(
        stashes.map(({ storage }) => storage.get().catch(warning))
      ).then((values) => {
        internalState = 'REHYDRATED';

        dispatch({
          type: REHYDRATE,
          payload: zipObj(pluck('name', stashes), values),
        });
      });
    }

    const result = next(action);

    if (internalState === 'REHYDRATED') {
      const state = getState();

      writableStashes.forEach(({ name, selector, storage }) => {
        const value = selector(state);

        if (value == null && cache.has(name)) {
          storage
            .remove()
            .then(() => {
              cache.delete(name);
            })
            .catch(warning);
        } else if (!Object.is(cache.get(name), value)) {
          storage
            .set(value)
            .then(() => {
              cache.set(name, value);
            })
            .catch(warning);
        }
      });
    }

    return result;
  };
};

export default createStashMiddleware;
