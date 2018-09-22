import Storage from '../Storage';

test('stores "key" when constructed', () => {
  const storage = new Storage('hi');
  expect(storage.key).toBe('hi');
});

test('stores "options" when constructed', () => {
  const storage = new Storage('hi', { foo: 'bar' });
  expect(storage.options).toEqual({ foo: 'bar' });
});
