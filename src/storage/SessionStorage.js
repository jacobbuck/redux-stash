import Storage from './Storage';

class SessionStorage extends Storage {
  get() {
    return new Promise((resolve, reject) => {
      try {
        resolve(sessionStorage.getItem(this.key));
      } catch (error) {
        reject(error);
      }
    });
  }

  set(value) {
    return new Promise((resolve, reject) => {
      try {
        resolve(sessionStorage.setItem(this.key, value));
      } catch (error) {
        reject(error);
      }
    });
  }

  remove() {
    return new Promise((resolve, reject) => {
      try {
        resolve(sessionStorage.removeItem(this.key, value));
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default SessionStorage;
