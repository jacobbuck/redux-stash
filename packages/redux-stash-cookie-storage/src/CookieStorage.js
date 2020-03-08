import * as Cookies from 'js-cookie';
import { Storage } from 'redux-stash';

function CookieStorage() {
  Storage.apply(this, arguments);
}

CookieStorage.prototype = Object.create(Storage.prototype);
CookieStorage.prototype.constructor = CookieStorage;

CookieStorage.prototype.get = function get() {
  return new Promise((resolve, reject) => {
    try {
      resolve(Cookies.get(this.key));
    } catch (error) {
      reject(error);
    }
  });
};

CookieStorage.prototype.set = function set(value) {
  return new Promise((resolve, reject) => {
    try {
      resolve(Cookies.set(this.key, value, this.options));
    } catch (error) {
      reject(error);
    }
  });
};

CookieStorage.prototype.remove = function remove() {
  return new Promise((resolve, reject) => {
    try {
      resolve(Cookies.remove(this.key, this.options));
    } catch (error) {
      reject(error);
    }
  });
};

export default CookieStorage;
