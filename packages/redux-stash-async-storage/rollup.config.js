import babel from 'rollup-plugin-babel';

export default {
  input: 'src/AsyncStorage.js',
  output: {
    file: 'lib/AsyncStorage.js',
    format: 'cjs',
  },
  external: ['redux-stash', 'react-native'],
  plugins: [babel()],
};
