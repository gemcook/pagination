/* @flow */
const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
// const stripBanner = require('rollup-plugin-strip-banner');
const json = require('rollup-plugin-json');
const url = require('rollup-plugin-url');
const postcss = require('rollup-plugin-postcss');
const {getBabelOptions, resolvePath} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

async function build() {
  try {
    const bundle = await rollup({
      input: resolvePath('src/index.js'),
      external: ['lodash', 'react', 'react-dom'],
      plugins: [
        postcss({
          extensions: ['.css'],
        }),
        babel(getBabelOptions()),
        replace({
          __DEV__: isProduction ? 'false' : 'true',
          'process.env.NODE_ENV': isProduction
            ? "'production'"
            : "'development'",
        }),
        // stripBanner(),
        isProduction && prettier(),
      ],
    });

    bundle.write({
      format: 'es',
      file: resolvePath('lib/es/index.es.js'),
      exports: 'named',
    });
  } catch (error) {
    console.error(error);
  }
}

build();
