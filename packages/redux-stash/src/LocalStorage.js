import Storage from './Storage';

function LocalStorage() {
  if (process.env.NODE_ENV !== 'production') {
    if (!(this instanceof LocalStorage)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  Storage.apply(this, arguments);
}

LocalStorage.prototype = Object.create(Storage.prototype);
LocalStorage.prototype.constructor = LocalStorage;

LocalStorage.prototype.get = function get() {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.getItem(this.key));
    } catch (error) {
      reject(error);
    }
  });
};

LocalStorage.prototype.set = function set(value) {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.setItem(this.key, value));
    } catch (error) {
      reject(error);
    }
  });
};

LocalStorage.prototype.remove = function remove() {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.removeItem(this.key));
    } catch (error) {
      reject(error);
    }
  });
};

export default LocalStorage;
