const zipObj = (keys, values) =>
  keys.reduce((result, key, index) => {
    result[key] = values[index];
    return result;
  }, {});

export default zipObj;
