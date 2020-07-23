import { REHYDRATE } from './actionTypes';
import { has, isNil, pluck, warning, zipObj } from './utilities';

const createStashMiddleware = (...stashes) => {
  const cache = {};
  const writableStashes = stashes.filter(({ readOnly }) => !readOnly);

  let rehydrated = false;
  let rehydrating = false;

  return ({ getState }) => (next) => (action) => {
    if (action.type === REHYDRATE) {
      rehydrating = true;

      return Promise.all(
        stashes.map(({ storage }) => storage.get().catch(warning))
      ).then((values) => {
        rehydrated = true;
        rehydrating = false;

        return next({
          type: REHYDRATE,
          payload: zipObj(pluck('name', stashes), values),
        });
      });
    }

    const result = next(action);

    if (rehydrated && !rehydrating) {
      const state = getState();

      writableStashes.forEach(({ name, selector, storage }) => {
        const value = selector(state);

        if (!has(cache, name) || cache[name] !== value) {
          if (isNil(value)) {
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
