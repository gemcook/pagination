const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
// const stripBanner = require('rollup-plugin-strip-banner');
const postcss = require('rollup-plugin-postcss');
const {getBabelOptions, resolvePath, isExternal} = require('./utils');

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
        postcss({
          extensions: ['.css'],
        }),
        babel(getBabelOptions()),
        replace({
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
