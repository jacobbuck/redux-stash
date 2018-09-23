import Storage from './Storage';
import promisify from '../utils/promisify';

class SessionStorage extends Storage {
  get() {
    return promisify(() => sessionStorage.getItem(this.key));
  }

  set(value) {
    return promisify(() => sessionStorage.setItem(this.key, value));
  }

  remove() {
    return promisify(() => sessionStorage.removeItem(this.key));
  }
}

export default SessionStorage;
