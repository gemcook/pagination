/* @flow */
const path = require('path');
const fs = require('fs');
const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
// const closure = require('rollup-plugin-closure-compiler-js');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
// const stripBanner = require('rollup-plugin-strip-banner');
const json = require('rollup-plugin-json');
const url = require('rollup-plugin-url');
const scss = require('rollup-plugin-scss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');

// const closureOptions = {
//   compilationLevel: 'SIMPLE',
//   languageIn: 'ECMASCRIPT6_STRICT',
//   languageOut: 'ECMASCRIPT5_STRICT',
//   env: 'CUSTOM',
//   warningLevel: 'VERBOSE',
//   applyInputSourceMaps: false,
//   useTypesForOptimization: false,
//   processCommonJsModules: true,
// };

const isProduction = process.env.NODE_ENV === 'production';

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

async function build() {
  try {
    const bundle = await rollup({
      input: resolvePath('src/index.js'),
      external: ['lodash', 'react', 'react-dom'],
      plugins: [
        resolve({
          module: true,
          main: true,
          browser: true,
          extensions: ['.js', '.json', '.jsx'],
          preferBuiltins: false,
          customResolveOptions: {
            moduleDirectory: resolvePath('node_modules'),
          },
        }),
        peerDepsExternal(),
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
        babel({
          exclude: 'node_modules/**',
          babelrc: false,
          presets: [
            '@babel/flow',
            '@babel/react',
            '@babel/preset-stage-3',
            [
              '@babel/preset-env',
              {
                targets: {browsers: ['> 1% in JP']},
                modules: false,
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                helpers: true,
                polyfill: false,
                regenerator: false,
                moduleName: '@babel/runtime',
              },
            ],
            ['@babel/plugin-proposal-class-properties', {loose: true}],
            '@babel/plugin-proposal-decorators',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-syntax-class-properties',
            '@babel/plugin-syntax-decorators',
            '@babel/plugin-syntax-export-default-from',
            '@babel/plugin-syntax-export-namespace-from',
            '@babel/plugin-syntax-optional-chaining',
          ],
          runtimeHelpers: true,
        }),
        replace({
          __DEV__: isProduction ? 'false' : 'true',
          'process.env.NODE_ENV': isProduction
            ? "'production'"
            : "'development'",
        }),
        // TODO: optimizing JavaScript with google-closure-compiler-js
        // isProduction &&
        //   closure({
        //     ...closureOptions,
        //     // Don't let it create global variables in the browser.
        //     // https://github.com/facebook/react/issues/10909
        //     assumeFunctionWrapper: false,
        //     // Works because `google-closure-compiler-js` is
        //     // forked in Yarn lockfile.
        //     // We can remove this if GCC merges my PR:
        //     // https://github.com/google/closure-compiler/pull/2707
        //     // and then the compiled version is released
        //     // via `google-closure-compiler-js`.
        //     renaming: false,
        //   }),
        // TODO: COPYRIGHT
        // stripBanner(),
        isProduction && prettier(),
      ],
    });

    bundle.write({
      format: 'umd',
      file: resolvePath('lib/index.umd.js'),
      name: 'Pagination',
      exports: 'named',
      globals: {
        react: 'React',
      },
    });
  } catch (error) {
    console.error(error);
  }
}

build();
