function Storage(key) {
  if (process.env.NODE_ENV !== 'production') {
    if (!(this instanceof Storage)) {
      throw new TypeError('Cannot call a class as a function');
    }
    if (typeof key !== 'string') {
      throw new TypeError('Expected the key to be a string');
    }
  }
  this.key = key;
}

export default Storage;
