export const isNil = value => value == null;

export const pluck = (key, list) => list.map(item => item[key]);

export const warning = error => {
  if (typeof console !== 'undefined') {
    console.error(error);
  }
};

export const zipObj = (keys, values) =>
  keys.reduce((result, key, index) => {
    result[key] = values[index];
    return result;
  }, {});
