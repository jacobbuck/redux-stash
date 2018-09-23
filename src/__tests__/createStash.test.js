import createStash from '../createStash';
import LocalStorage from '../storage/LocalStorage';

const defaultSelector = state => state.foo;
const defaultStorage = new LocalStorage('foo');

test('returns an object', () => {
  const stash = createStash({
    name: 'foo',
    selector: defaultSelector,
    storage: defaultStorage,
  });
  expect(stash).toEqual({
    name: 'foo',
    readOnly: false,
    selector: expect.any(Function),
    storage: expect.any(LocalStorage),
  });
});

test('ignores invalid properties', () => {
  const stash = createStash({
    name: 'foo',
    selector: defaultSelector,
    storage: defaultStorage,
    foo: 'bar',
  });
  expect(stash).not.toHaveProperty('foo', 'bar');
});

test("throws an error when name isn't a string", () => {
  expect(() =>
    createStash({
      name: null,
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 420,
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: ['foo'],
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: { toString: () => 'foo' },
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toThrow();
});

test("throws an error when readOnly isn't a boolean", () => {
  expect(() =>
    createStash({
      name: 'foo',
      readOnly: null,
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      readOnly: 'true',
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      readOnly: [true],
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toThrow();
});

test("throws an error when selector isn't a function", () => {
  expect(() =>
    createStash({
      name: 'foo',
      selector: false,
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      selector: 'foo',
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      selector: new function Foo() {}(),
      storage: defaultStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      selector: { foo: 'bar' },
      storage: defaultStorage,
    })
  ).toThrow();
});

test("throws an error when storage isn't an instanceof Storage", () => {
  expect(() =>
    createStash({
      name: 'foo',
      selector: defaultSelector,
      storage: localStorage,
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      selector: defaultSelector,
      storage: function() {},
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      selector: defaultSelector,
      storage: new function Foo() {}(),
    })
  ).toThrow();
  expect(() =>
    createStash({
      name: 'foo',
      selector: defaultSelector,
      storage: { foo: 'bar' },
    })
  ).toThrow();
});
