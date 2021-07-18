/**
 * @jest-environment jsdom
 */
import SessionStorage from '../SessionStorage';

beforeEach(() => {
  sessionStorage.clear();
});

test('get method returns a Promise which resolves value from sessionStorage', async () => {
  const storage = new SessionStorage('foo');
  await expect(storage.get()).resolves.toBeNull();
  sessionStorage.setItem('foo', 'bar');
  await expect(storage.get()).resolves.toBe('bar');
});

test('set method returns a Promise which resolves when value is set in sessionStorage', async () => {
  const storage = new SessionStorage('foo');
  await expect(storage.set('bar')).resolves.toBeUndefined();
  expect(sessionStorage.getItem('foo')).toBe('bar');
});

test('remove method returns a Promise which resolves when value is removed from sessionStorage', async () => {
  const storage = new SessionStorage('foo');
  sessionStorage.setItem('foo', 'bar');
  await expect(storage.remove()).resolves.toBeUndefined();
  expect(sessionStorage.getItem('foo')).toBeNull();
});
