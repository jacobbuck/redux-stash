import { warning, zipObj } from '../utilities';

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
