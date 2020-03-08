import Storage from './Storage';

const createStash = ({
  name,
  readOnly = false,
  selector = () => {},
  storage,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof name !== 'string') {
      throw new TypeError('Expected "name" to be a string');
    }
    if (typeof readOnly !== 'boolean') {
      throw new TypeError('Expected "readOnly" to be a boolean');
    }
    if (typeof selector !== 'function') {
      throw new TypeError('Expected "selector" to be a function');
    }
    if (!(storage instanceof Storage)) {
      throw new TypeError('Expected "storage" to be an instance of Storage');
    }
  }
  return {
    name,
    readOnly,
    selector,
    storage,
  };
};

export default createStash;
