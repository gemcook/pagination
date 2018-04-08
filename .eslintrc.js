'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },

  extends: ['fbjs', 'prettier'],

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  plugins: ['babel', 'flowtype', 'jest', 'no-for-of-loops', 'prettier'],

  // We're stricter than the default config, mostly. We'll override a few rules
  // and then enable some React specific ones.
  rules: {
    'prettier/prettier': [
      ERROR,
      {
        bracketSpacing: false,
        singleQuote: true,
        jsxBracketSameLine: true,
        trailingComma: 'all',
        printWidth: 80,
      },
    ],
    'max-len': [
      ERROR,
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-confusing-arrow': ERROR,
    'no-mixed-operators': ERROR,
    'no-unexpected-multiline': ERROR,
  },

  overrides: [
    {
      files: ['**/__tests__/*.js'],
      rules: {
        // https://github.com/jest-community/eslint-plugin-jest
        'jest/no-focused-tests': ERROR,
      },
    },
  ],

  globals: {
    spyOnDev: true,
    spyOnDevAndProd: true,
    spyOnProd: true,
  },
};
