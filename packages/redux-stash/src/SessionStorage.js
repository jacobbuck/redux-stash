import Storage from './Storage';

function SessionStorage() {
  if (process.env.NODE_ENV !== 'production') {
    if (!(this instanceof SessionStorage)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  Storage.apply(this, arguments);
}

SessionStorage.prototype = Object.create(Storage.prototype);
SessionStorage.prototype.constructor = SessionStorage;

SessionStorage.prototype.get = function get() {
  return new Promise((resolve, reject) => {
    try {
      resolve(sessionStorage.getItem(this.key));
    } catch (error) {
      reject(error);
    }
  });
};

SessionStorage.prototype.set = function set(value) {
  return new Promise((resolve, reject) => {
    try {
      resolve(sessionStorage.setItem(this.key, value));
    } catch (error) {
      reject(error);
    }
  });
};

SessionStorage.prototype.remove = function remove() {
  return new Promise((resolve, reject) => {
    try {
      resolve(sessionStorage.removeItem(this.key));
    } catch (error) {
      reject(error);
    }
  });
};

export default SessionStorage;
