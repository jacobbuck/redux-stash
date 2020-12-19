import Storage from './Storage';

class LocalStorage extends Storage {
  get() {
    return new Promise((resolve) => {
      resolve(localStorage.getItem(this.key));
    });
  }

  set(value) {
    return new Promise((resolve) => {
      resolve(localStorage.setItem(this.key, value));
    });
  }

  remove() {
    return new Promise((resolve) => {
      resolve(localStorage.removeItem(this.key));
    });
  }
}

export default LocalStorage;
