import promisify from '../promisify';

test('returns a Promise resolved with the returned value of the passed function', () => {
  const promise = promisify(() => 'hi');
  return expect(promise).resolves.toBe('hi');
});

test('returns a Promise rejected with the error thrown of the passed function', () => {
  const promise = promisify(() => {
    throw new Error('bye');
  });
  return expect(promise).rejects.toThrow('bye');
});
