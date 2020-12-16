// Output an error in the console.
const warning = (error) => {
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(error);
  }
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw error;
  } catch (e) {}
};

export default warning;
