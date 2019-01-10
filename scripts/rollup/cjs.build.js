const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
// const stripBanner = require('rollup-plugin-strip-banner');
const json = require('rollup-plugin-json');
const url = require('rollup-plugin-url');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const {
  getBabelOptions,
  resolvePath,
  getClosureOptions,
  isExternal,
} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

async function build() {
  try {
    const bundle = await rollup({
      input: resolvePath('src/index.js'),
      external: isExternal,
      plugins: [
        resolve({
          extensions: ['.js', '.json', '.jsx'],
          preferBuiltins: false,
          customResolveOptions: {
            moduleDirectory: resolvePath('node_modules'),
          },
        }),
        json(),
        url(),
        postcss({
          extensions: ['.css'],
        }),
        commonjs({
          include: 'node_modules/**',
          namedExports: {
            'node_modules/react/index.js': [
              'Component',
              'PureComponent',
              'Fragment',
              'Children',
              'createElement',
              'createFactory',
            ],
            'node_modules/react-dom/index.js': ['render'],
          },
        }),
        babel(getBabelOptions()),
        replace({
          'process.env.NODE_ENV': isProduction
            ? "'production'"
            : "'development'",
        }),
        // TODO: COPYRIGHT
        // stripBanner(),
        isProduction && prettier(),
      ],
    });

    bundle.write({
      format: 'cjs',
      file: resolvePath('lib/cjs/index.cjs.js'),
      name: 'Pagination',
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        '@gemcook/pagination': 'Pagination',
      },
    });
  } catch (error) {
    console.error(error);
  }
}

build();
