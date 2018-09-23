const promisify = fn =>
  new Promise((resolve, reject) => {
    try {
      const result = fn();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });

export default promisify;
