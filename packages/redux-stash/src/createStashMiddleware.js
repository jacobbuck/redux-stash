import { REHYDRATE, REQUEST_REHYDRATE } from './actionTypes';
import { has, pluck, warning, zipObj } from './utilities';

const createStashMiddleware = (...stashes) => {
  const cache = {};
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

        if (!has(cache, name) || !Object.is(cache[name], value)) {
          if (value == null) {
            storage.remove().catch(warning);
          } else {
            storage.set(value).catch(warning);
          }

          cache[name] = value;
        }
      });
    }

    return result;
  };
};

export default createStashMiddleware;
