import * as Cookies from 'js-cookie';
import Storage from './Storage';
import promisify from '../utils/promisify';

class CookieStorage extends Storage {
  get() {
    return promisify(() => Cookies.get(this.key));
  }

  set(value) {
    return promisify(() => Cookies.set(this.key, value, this.options));
  }

  remove() {
    return promisify(() => Cookies.remove(this.key, this.options));
  }
}

export default CookieStorage;
