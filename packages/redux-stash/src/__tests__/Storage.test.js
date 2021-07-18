import Storage from '../Storage';

test('stores key when constructed', () => {
  const storage = new Storage('hi');
  expect(storage.key).toBe('hi');
});

test("throws an error when key isn't a string", () => {
  [null, undefined, true, ['foo'], { foo: 'bar' }].forEach((key) => {
    expect(() => new Storage(key)).toThrow();
  });
});
