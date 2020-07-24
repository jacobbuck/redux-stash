import ReactNativeAsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '../AsyncStorage';

test('get method calls AsyncStorage.getItem() and returns a Promise', () => {
  const storage = new AsyncStorage('foo');
  expect(storage.get()).toBeInstanceOf(Promise);
  expect(ReactNativeAsyncStorage.getItem).toHaveBeenCalledWith('foo');
});

test('set method calls AsyncStorage.setItem() and returns a Promise', () => {
  const storage = new AsyncStorage('foo');
  expect(storage.set('bar')).toBeInstanceOf(Promise);
  expect(ReactNativeAsyncStorage.setItem).toHaveBeenCalledWith('foo', 'bar');
});

test('remove method calls AsyncStorage.removeItem() and returns a Promise', () => {
  const storage = new AsyncStorage('foo');
  expect(storage.remove()).toBeInstanceOf(Promise);
  expect(ReactNativeAsyncStorage.removeItem).toHaveBeenCalledWith('foo');
});
