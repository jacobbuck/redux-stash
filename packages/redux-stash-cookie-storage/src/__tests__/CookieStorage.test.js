import * as Cookies from 'js-cookie';
import CookieStorage from '../CookieStorage';

beforeEach(() => {
  document.cookie = '';
});

test('get method returns a Promise which resolves value from cookies', async () => {
  const storage = new CookieStorage('foo');
  await expect(storage.get()).resolves.toBeUndefined();
  Cookies.set('foo', 'bar');
  await expect(storage.get()).resolves.toBe('bar');
});

test('set method returns a Promise which resolves when value is set in cookies', async () => {
  const storage = new CookieStorage('foo');
  await expect(storage.set('bar')).resolves.toBe('foo=bar; path=/');
  expect(Cookies.get('foo')).toBe('bar');
});

test('remove method returns a Promise which resolves when value is removed from cookies', async () => {
  const storage = new CookieStorage('foo');
  Cookies.set('foo', 'bar');
  await expect(storage.remove()).resolves.toBeUndefined();
  expect(Cookies.get('foo')).toBeUndefined();
});
