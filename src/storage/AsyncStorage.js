import { AsyncStorage as ReactNativeAsyncStorage } from 'react-native';
import Storage from './Storage';

class AsyncStorage extends Storage {
  get() {
    return ReactNativeAsyncStorage.getItem(this.key);
  }

  set(value) {
    return ReactNativeAsyncStorage.setItem(this.key, value);
  }

  remove() {
    return ReactNativeAsyncStorage.removeItem(this.key);
  }
}

export default AsyncStorage;
