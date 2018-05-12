/* @flow */
module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
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
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-syntax-class-properties',
        '@babel/plugin-syntax-decorators',
        '@babel/plugin-syntax-export-default-from',
        '@babel/plugin-syntax-export-namespace-from',
        '@babel/plugin-syntax-optional-chaining',
      ],
      runtimeHelpers: true,
    },
  );
};
