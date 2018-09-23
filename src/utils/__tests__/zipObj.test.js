import zipObj from '../zipObj';

test('returns a new object out of an array of of keys and an array of values', () => {
  const keys = ['hi', 'hello'];
  const values = ['bye', 'goodbye'];
  expect(zipObj(keys, values)).toEqual({ hi: 'bye', hello: 'goodbye' });
});
