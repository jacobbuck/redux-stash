import * as Cookies from 'js-cookie';
import { Storage } from 'redux-stash';

export class CookieStorage extends Storage {
  get() {
    return new Promise((resolve, reject) => {
      try {
        resolve(Cookies.get(this.key));
      } catch (error) {
        reject(error);
      }
    });
  }

  set(value) {
    return new Promise((resolve, reject) => {
      try {
        resolve(Cookies.set(this.key, value, this.options));
      } catch (error) {
        reject(error);
      }
    });
  }

  remove() {
    return new Promise((resolve, reject) => {
      try {
        resolve(Cookies.remove(this.key, this.options));
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default CookieStorage;
