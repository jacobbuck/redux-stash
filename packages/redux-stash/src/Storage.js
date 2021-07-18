import invariant from 'tiny-invariant';

class Storage {
  constructor(key) {
    invariant(typeof key === 'string', 'Expected `key` to be a string');
    this.key = key;
  }
}

export default Storage;
