class Storage {
  constructor(key) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof key !== 'string') {
        throw new TypeError('Expected the key to be a string.');
      }
    }
    this.key = key;
  }
}

export default Storage;
