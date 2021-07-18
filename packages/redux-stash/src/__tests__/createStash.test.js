/**
 * @jest-environment jsdom
 */
import createStash from '../createStash';
import LocalStorage from '../LocalStorage';

const defaultSelector = (state) => state.foo;
const defaultStorage = new LocalStorage('foo');

test('returns an object', () => {
  expect(
    createStash({
      name: 'foo',
      selector: defaultSelector,
      storage: defaultStorage,
    })
  ).toEqual({
    name: 'foo',
    readOnly: false,
    selector: defaultSelector,
    storage: defaultStorage,
  });
  expect(
    createStash({
      name: 'foo',
      readOnly: true,
      storage: defaultStorage,
    })
  ).toEqual({
    name: 'foo',
    readOnly: true,
    selector: expect.any(Function),
    storage: defaultStorage,
  });
});

test('ignores invalid properties', () => {
  expect(
    createStash({
      name: 'foo',
      selector: defaultSelector,
      storage: defaultStorage,
      foo: 'bar',
    })
  ).not.toHaveProperty('foo');
});

test('throws an error when name isn’t a string', () => {
  [null, 3840, ['foo'], new String('foo')].forEach((name) => {
    expect(() =>
      createStash({
        name,
        selector: defaultSelector,
        storage: defaultStorage,
      })
    ).toThrow('Expected `name` to be a string');
  });
});

test('throws an error when readOnly isn’t a boolean', () => {
  [null, 1, 'true', [true], new Boolean(true)].forEach((readOnly) => {
    expect(() =>
      createStash({
        name: 'foo',
        readOnly,
        selector: defaultSelector,
        storage: defaultStorage,
      })
    ).toThrow('Expected `readOnly` to be a boolean');
  });
});

test('throws an error when selector isn’t a function', () => {
  function Foo() {}
  [false, 'foo', new Foo(), { call: jest.fn() }].forEach((selector) => {
    expect(() =>
      createStash({
        name: 'foo',
        selector: false,
        storage: defaultStorage,
      })
    ).toThrow('Expected `selector` to be a function');
  });
});

test('throws an error when storage isn’t an instanceof Storage', () => {
  class FooStorage {}
  [
    localStorage,
    function () {},
    new FooStorage(),
    { getItem() {}, setItem() {}, deleteItem() {} },
  ].forEach((storage) => {
    expect(() =>
      createStash({
        name: 'foo',
        selector: defaultSelector,
        storage,
      })
    ).toThrow('Expected `storage` to be an instance of Storage');
  });
});
