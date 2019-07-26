const fs = require('fs-extra');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const postcss = require('rollup-plugin-postcss');

export default [
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'indexof'],
    plugins: [
      {
        name: 'clean lib dir',
        buildStart: async () => {
          const libPath = './lib';
          const exists = await fs.pathExists(libPath);
          if (exists) {
            fs.emptyDirSync(libPath);
          }
        },
        buildEnd: err => {
          if (err) {
            throw err;
          }
        },
      },
      json({
        include: 'node_modules/**',
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        // Node.js の fs, path 等のモジュールを bundle 対象外にする
        preferBuiltins: false,
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/rc-select/node_modules/prop-types/index.js': [
            'string',
            'func',
            'node',
            'oneOfType',
            'arrayOf',
            'any',
            'bool',
            'object',
            'number',
            'shape',
          ],
        },
      }),
      babel({
        runtimeHelpers: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {node: 'current'},
              corejs: 3,
              useBuiltIns: 'usage',
              loose: true,
              modules: false,
            },
          ],
          ['@babel/preset-react', {useBuiltIns: true}],
          '@babel/preset-flow',
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: 3,
            },
          ],
          ['@babel/proposal-class-properties', {loose: true}],
          ['@babel/plugin-proposal-private-methods', {loose: true}],
        ],
      }),
      postcss({
        extensions: ['.css', '.scss'],
        extract: 'lib/styles/index.css',
      }),
      {
        name: 'sync scss',
        buildEnd: err => {
          if (err) {
            throw err;
          }

          fs.copySync('./src/styles', './lib/styles', {
            dereference: true,
          });
        },
      },
    ],
    onwarn: (warning, warn) => {
      // NOTE: rc-menu がリファクタリングしないと解消しない問題
      if (
        warning.code === 'CIRCULAR_DEPENDENCY' &&
        warning.importer === 'node_modules/rc-menu/es/SubPopupMenu.js'
      ) {
        return;
      }

      if (warning.code === 'THIS_IS_UNDEFINED') {
        // NOTE: rc-select がリファクタリングしないと解消しない問題
        if (
          warning.frame ===
          '19: function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n20: \n21: var __rest = this && this.__rest || function (s, e) {\n                 ^\n22:   var t = {};'
        ) {
          return;
        } else if (
          warning.frame ===
          '19: function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n20: \n21: var __rest = this && this.__rest || function (s, e) {\n                         ^\n22:   var t = {};'
        ) {
          return;
        }
      }

      warn(warning);
    },
    output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'Pagination',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        indexof: 'indexof',
      },
    },
  },
];
