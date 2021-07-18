import invariant from 'tiny-invariant';
import Storage from './Storage';

const createStash = ({
  name,
  readOnly = false,
  selector = () => {},
  storage,
}) => {
  invariant(typeof name === 'string', 'Expected `name` to be a string');
  invariant(
    typeof readOnly === 'boolean',
    'Expected `readOnly` to be a boolean'
  );
  invariant(
    typeof selector === 'function',
    'Expected `selector` to be a function'
  );
  invariant(
    storage instanceof Storage,
    'Expected `storage` to be an instance of Storage'
  );
  return {
    name,
    readOnly,
    selector,
    storage,
  };
};

export default createStash;
