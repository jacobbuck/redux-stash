import babel from 'rollup-plugin-babel';

export default {
  input: 'src/AsyncStorage.js',
  output: [
    {
      file: 'lib/AsyncStorage.cjs.js',
      format: 'cjs',
    },
    {
      file: 'lib/AsyncStorage.esm.js',
      format: 'esm',
    }
  ],
  external: ['@react-native-community/async-storage', 'redux-stash'],
  plugins: [babel()],
};
