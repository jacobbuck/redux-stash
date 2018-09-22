const createStash = ({ name, readOnly = false, selector, storage }) => ({
  name,
  readOnly,
  selector,
  storage,
});

export default createStash;
