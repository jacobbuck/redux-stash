// Checks if an object has an own property with the specified name.
export const has = (obj, name) =>
  Object.prototype.hasOwnProperty.call(obj, name);

// Checks if the input value is null or undefined.
export const isNil = (value) => value == null;

// Returns a new array by plucking a named property off all objects in the array supplied.
export const pluck = (key, list) => list.map((item) => item[key]);

// Output an error in the console.
export const warning = (error) => {
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(error);
  }
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw error;
  } catch (e) {}
};

// Returns a new object from an array of keys and array of values.
export const zipObj = (keys, values) =>
  keys.reduce((result, key, index) => {
    result[key] = values[index];
    return result;
  }, {});
