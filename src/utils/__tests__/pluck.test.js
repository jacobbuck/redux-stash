import pluck from '../pluck';

test('returns a new array with values of same named property off all objects in the array passed', () => {
  const input = [{ foo: 'hi', bar: 'bye' }, { foo: 'hello', bar: 'goodbye' }];
  const output = pluck('foo', input);
  expect(output).toEqual(['hi', 'hello']);
  expect(output).not.toBe(input);
});
