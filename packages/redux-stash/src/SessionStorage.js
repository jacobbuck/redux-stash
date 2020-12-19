import Storage from './Storage';

class SessionStorage extends Storage {
  get() {
    return new Promise((resolve) => {
      resolve(sessionStorage.getItem(this.key));
    });
  }

  set(value) {
    return new Promise((resolve) => {
      resolve(sessionStorage.setItem(this.key, value));
    });
  }

  remove() {
    return new Promise((resolve) => {
      resolve(sessionStorage.removeItem(this.key));
    });
  }
}

export default SessionStorage;
