import LocalStorage from '../LocalStorage';

beforeEach(() => {
  localStorage.clear();
});

test('get method returns a Promise which resolves value from localStorage', async () => {
  const storage = new LocalStorage('foo');
  await expect(storage.get()).resolves.toBeNull();
  localStorage.setItem('foo', 'bar');
  await expect(storage.get()).resolves.toBe('bar');
});

test('get method returns a Promise which resolves when value is set in localStorage', async () => {
  const storage = new LocalStorage('foo');
  await expect(storage.set('bar')).resolves.toBeUndefined();
  expect(localStorage.getItem('foo')).toBe('bar');
});

test('get method returns a Promise which resolves when value is removed from localStorage', async () => {
  const storage = new LocalStorage('foo');
  localStorage.setItem('foo', 'bar');
  await expect(storage.remove()).resolves.toBeUndefined();
  expect(localStorage.getItem('foo')).toBeNull();
});
