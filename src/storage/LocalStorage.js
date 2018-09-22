import Storage from './Storage';

class LocalStorage extends Storage {
  get() {
    return new Promise((resolve, reject) => {
      try {
        resolve(localStorage.getItem(this.key));
      } catch (error) {
        reject(error);
      }
    });
  }

  set(value) {
    return new Promise((resolve, reject) => {
      try {
        resolve(localStorage.setItem(this.key, value));
      } catch (error) {
        reject(error);
      }
    });
  }

  remove() {
    return new Promise((resolve, reject) => {
      try {
        resolve(localStorage.removeItem(this.key, value));
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default LocalStorage;
