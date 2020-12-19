import ReactNativeAsyncStorage from '@react-native-community/async-storage';
import { Storage } from 'redux-stash';

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

export { AsyncStorage as default, AsyncStorage };
