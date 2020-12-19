import babel from '@rollup/plugin-babel';

export default {
  input: 'src/AsyncStorage.js',
  output: [
    {
      exports: 'named',
      file: 'lib/AsyncStorage.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/AsyncStorage.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    /@babel\/runtime/,
    '@react-native-community/async-storage',
    'redux-stash',
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
