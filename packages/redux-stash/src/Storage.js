function Storage(key, options = {}) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof key !== 'string') {
      throw new TypeError('Expected the key to be a string.');
    }
    if (typeof options !== 'object') {
      throw new TypeError('Expected the options to be an object.');
    }
  }
  this.key = key;
  this.options = options;
}

export default Storage;
