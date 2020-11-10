import babel from '@rollup/plugin-babel';

export default {
  input: 'src/CookieStorage.js',
  output: [
    { file: 'lib/CookieStorage.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'lib/CookieStorage.esm.js', format: 'esm', sourcemap: true },
  ],
  external: ['js-cookie', 'redux-stash'],
  plugins: [babel({ babelHelpers: 'bundled' })],
};
