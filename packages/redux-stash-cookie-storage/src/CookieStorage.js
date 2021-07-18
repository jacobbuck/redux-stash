import * as Cookies from 'js-cookie';
import { Storage } from 'redux-stash';
import invariant from 'tiny-invariant';

class CookieStorage extends Storage {
  constructor(key, options = {}) {
    super(key);
    invariant(
      typeof options === 'object' && options !== null,
      'Expected `options` to be an object'
    );
    this.options = options;
  }

  get() {
    return new Promise((resolve) => {
      resolve(Cookies.get(this.key));
    });
  }

  set(value) {
    return new Promise((resolve) => {
      resolve(Cookies.set(this.key, value, this.options));
    });
  }

  remove() {
    return new Promise((resolve) => {
      resolve(Cookies.remove(this.key, this.options));
    });
  }
}

export { CookieStorage as default, CookieStorage };
