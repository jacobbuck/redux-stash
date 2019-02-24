import babel from 'rollup-plugin-babel';

export default {
  input: 'src/CookieStorage.js',
  output: {
    file: 'lib/CookieStorage.js',
    format: 'cjs',
  },
  external: ['js-cookie', 'redux-stash'],
  plugins: [babel()],
};
