export const AsyncStorage = {
  getItem: jest.fn(key => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve(null)),
  getAllKeys: jest.fn(() => Promise.resolve(null)),
  multiGet: jest.fn(() => Promise.resolve(null)),
  multiSet: jest.fn(() => Promise.resolve(null)),
  multiRemove: jest.fn(() => Promise.resolve(null)),
};
