import babel from 'rollup-plugin-babel';

export default {
  input: 'src/CookieStorage.js',
  output: [
    {
      file: 'lib/CookieStorage.cjs.js',
      format: 'cjs',
    },
    {
      file: 'lib/CookieStorage.esm.js',
      format: 'esm',
    }
  ],
  external: ['js-cookie', 'redux-stash'],
  plugins: [babel()],
};
