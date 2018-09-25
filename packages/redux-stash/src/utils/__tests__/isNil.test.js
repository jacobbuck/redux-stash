import isNil from '../isNil';

test('returns true when value is null or undefined', () => {
  expect(isNil(null)).toBe(true);
  expect(isNil(undefined)).toBe(true);
  expect(isNil(void 0)).toBe(true);
});

test('returns false when value is not null or undefined', () => {
  expect(isNil({})).toBe(false);
  expect(isNil({ foo: 'bar' })).toBe(false);
  expect(isNil('')).toBe(false);
  expect(isNil('foo')).toBe(false);
  expect(isNil(false)).toBe(false);
  expect(isNil(true)).toBe(false);
});
