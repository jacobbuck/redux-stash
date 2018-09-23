import Storage from './Storage';
import promisify from '../utils/promisify';

class LocalStorage extends Storage {
  get() {
    return promisify(() => localStorage.getItem(this.key));
  }

  set(value) {
    return promisify(() => localStorage.setItem(this.key, value));
  }

  remove() {
    return promisify(() => localStorage.removeItem(this.key));
  }
}

export default LocalStorage;
