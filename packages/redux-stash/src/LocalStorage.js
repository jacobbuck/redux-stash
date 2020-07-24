import Storage from './Storage';

function LocalStorage() {
  if (process.env.NODE_ENV !== 'production') {
    if (!(this instanceof LocalStorage)) {
      throw new TypeError('Cannot call a class as a function.');
    }
  }

  Storage.apply(this, arguments);
}

LocalStorage.prototype = Object.create(Storage.prototype);
LocalStorage.prototype.constructor = LocalStorage;

LocalStorage.prototype.get = function get() {
  return new Promise((resolve) => {
    resolve(localStorage.getItem(this.key));
  });
};

LocalStorage.prototype.set = function set(value) {
  return new Promise((resolve) => {
    resolve(localStorage.setItem(this.key, value));
  });
};

LocalStorage.prototype.remove = function remove() {
  return new Promise((resolve) => {
    resolve(localStorage.removeItem(this.key));
  });
};

export default LocalStorage;
