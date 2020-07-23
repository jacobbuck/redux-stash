import ReactNativeAsyncStorage from '@react-native-community/async-storage';
import { Storage } from 'redux-stash';

function AsyncStorage() {
  if (process.env.NODE_ENV !== 'production') {
    if (!(this instanceof CookieStorage)) {
      throw new TypeError('Cannot call a class as a function.');
    }
  }

  Storage.apply(this, arguments);
}

AsyncStorage.prototype = Object.create(Storage.prototype);
AsyncStorage.prototype.constructor = AsyncStorage;

AsyncStorage.prototype.get = function get() {
  return ReactNativeAsyncStorage.getItem(this.key);
};

AsyncStorage.prototype.set = function set(value) {
  return ReactNativeAsyncStorage.setItem(this.key, value);
};

AsyncStorage.prototype.remove = function remove() {
  return ReactNativeAsyncStorage.removeItem(this.key);
};

export default AsyncStorage;
