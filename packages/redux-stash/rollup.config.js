import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'lib/index.esm.js', format: 'esm', sourcemap: true },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
