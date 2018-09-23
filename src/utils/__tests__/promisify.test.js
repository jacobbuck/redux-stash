import promisify from '../promisify';

test('returns a Promise resolved with the returned value of the passed function', async () => {
  const promise = promisify(() => 'hi');
  await expect(promise).resolves.toBe('hi');
});

test('returns a Promise rejected with the error thrown of the passed function', async () => {
  const promise = promisify(() => {
    throw new Error('bye');
  });
  await expect(promise).rejects.toThrow('bye');
});
