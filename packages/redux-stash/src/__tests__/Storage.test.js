import Storage from '../Storage';

test('stores key when constructed', () => {
  const storage = new Storage('hi');
  expect(storage.key).toBe('hi');
});

test('stores options when constructed', () => {
  const storage = new Storage('hi', { foo: 'bar' });
  expect(storage.options).toEqual({ foo: 'bar' });
});

test("throws an error when key isn't a string", () => {
  expect(() => new Storage()).toThrow();
  expect(() => new Storage(null)).toThrow();
  expect(() => new Storage(true)).toThrow();
  expect(() => new Storage({ foo: 'bar' })).toThrow();
});

test("throws an error when options isn't an object", () => {
  expect(() => new Storage('hi', true)).toThrow();
  expect(() => new Storage('hi', 'foo')).toThrow();
});
