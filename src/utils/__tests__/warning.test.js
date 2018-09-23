import warning from '../warning';

test('calls console.error when available', () => {
  const originalConsoleError = console.error;
  const spy = jest.fn();
  console.error = spy;
  try {
    warning(new Error('hi'));
    expect(spy).toHaveBeenCalled();
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
