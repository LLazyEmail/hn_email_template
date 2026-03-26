import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import babel from '@rollup/plugin-babel';
import globals from 'rollup-plugin-node-globals';
import includePaths from 'rollup-plugin-includepaths';
import pkg from './package.json';

const extensions = ['.js'];
const name = 'newsletterLayoutsOuterTemplatePlainJS';

const includePathOptions = {
  include: {},
  paths: ['src'],
  external: [],
  extensions,
};

const plugins = () => [
  resolve({
    extensions,
    mainFields: ['module', 'main', 'browser'],
  }),
  commonjs({
    ignore: ['conditional-runtime-dependency'],
  }),
  babel({
    extensions,
    include: ['src/*'],
    exclude: ['node_modules/**'],
    comments: false,
  }),
  includePaths(includePathOptions),
  globals(),
  builtins(),
];

export default {
  input: 'src/index.js',
  plugins: plugins(),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.browser,
      format: 'iife',
      name,
      globals: {
        path: 'path',
      },
    },
  ],
};
