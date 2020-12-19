import { REHYDRATE, REQUEST_REHYDRATE } from './actionTypes';
import warning from './warning';

const createStashMiddleware = (...stashes) => {
  const cache = new Map();
  const writableStashes = stashes.filter(({ readOnly }) => !readOnly);

  let internalState = 'INITIAL';

  return ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === REQUEST_REHYDRATE) {
      internalState = 'REHYDRATING';

      Promise.all(stashes.map(({ storage }) => storage.get().catch(warning)))
        .then((values) => {
          const entries = stashes.map(({ name }, i) => [name, values[i]]);

          cache.clear();
          entries.forEach(([key, value]) => {
            cache.set(key, value);
          });

          dispatch({
            type: REHYDRATE,
            payload: Object.fromEntries(entries),
          });
        })
        .finally(() => {
          internalState = 'REHYDRATED';
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
