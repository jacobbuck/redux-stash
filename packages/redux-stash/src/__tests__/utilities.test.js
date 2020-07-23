import { has, isNil, pluck, warning, zipObj } from '../utilities';

describe('has', () => {
  test('checks if an object has an own property with the specified name', () => {
    const obj = { foo: 'bar' };
    expect(has(obj, 'foo')).toBe(true);
    expect(has(obj, 'bar')).toBe(false);
    expect(has(obj, 'toString')).toBe(false);
  });
});

describe('isNil', () => {
  test('returns true if the given value is `null` or `undefined`', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  test('returns false if the given value is not `null` or `undefined`', () => {
    [false, NaN, 0, '', [], {}, () => {}].forEach((value) => {
      expect(isNil(value)).toBe(false);
    });
  });
});

describe('pluck', () => {
  test('returns a new array with values of same named property off all objects in the array passed', () => {
    const input = [
      { foo: 'hi', bar: 'bye' },
      { foo: 'hello', bar: 'goodbye' },
    ];
    const output = pluck('foo', input);
    expect(output).toEqual(['hi', 'hello']);
    expect(output).not.toBe(input);
  });
});

describe('warning', () => {
  test('calls console.error when available', () => {
    const originalConsoleError = console.error;
    const spy = jest.fn();
    console.error = spy;
    try {
      const error = new Error('hi');
      warning(error);
      expect(spy).toHaveBeenCalledWith(error);
    } finally {
      spy.mockClear();
      console.error = originalConsoleError;
    }
  });

  test('not throw when console is not available', () => {
    const originalConsole = global.console;
    Object.defineProperty(global, 'console', { value: undefined });
    try {
      expect(() => warning(new Error('hi'))).not.toThrow();
    } finally {
      Object.defineProperty(global, 'console', { value: console });
    }
  });
});

describe('zipObj', () => {
  test('returns a new object out of an array of of keys and an array of values', () => {
    const keys = ['hi', 'hello'];
    const values = ['bye', 'goodbye'];
    expect(zipObj(keys, values)).toEqual({ hi: 'bye', hello: 'goodbye' });
  });
});
