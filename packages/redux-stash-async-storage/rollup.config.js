import babel from '@rollup/plugin-babel';

export default {
  input: 'src/AsyncStorage.js',
  output: [
    { file: 'lib/AsyncStorage.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'lib/AsyncStorage.esm.js', format: 'esm', sourcemap: true },
  ],
  external: ['@react-native-community/async-storage', 'redux-stash'],
  plugins: [babel({ babelHelpers: 'bundled' })],
};
