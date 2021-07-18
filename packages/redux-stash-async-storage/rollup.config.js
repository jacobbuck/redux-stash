import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/AsyncStorage.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'named' },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  external: [
    /@babel\/runtime/,
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
