import babel from '@rollup/plugin-babel';

export default {
  input: 'src/CookieStorage.js',
  output: [
    {
      exports: 'named',
      file: 'lib/CookieStorage.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/CookieStorage.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/, 'js-cookie', 'redux-stash'],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
