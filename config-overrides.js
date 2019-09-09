const path = require('path');
const {
  override,
  useEslintRc,
  addBabelPlugins,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  useEslintRc('./.eslintrc.json'),
  ...addBabelPlugins('lodash'),
  addWebpackAlias({
    '@api': path.resolve(__dirname, 'src/api/index.ts'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@components': path.resolve(__dirname, 'src/components/'),
    '@config': path.resolve(__dirname, 'src/config/index.ts'),
    '@constants': path.resolve(__dirname, 'src/constants/index.ts'),
    '@data': path.resolve(__dirname, 'src/data/index.ts'),
    '@utils': path.resolve(__dirname, 'src/lib/utils/index.ts'),
    '@validations': path.resolve(__dirname, 'src/lib/validations/index.ts'),
    '@pages': path.resolve(__dirname, 'src/pages/index.ts'),
    '@templates': path.resolve(__dirname, 'src/templates/index.ts'),
    '@actions': path.resolve(__dirname, 'src/redux/actions/index.ts'),
    styles: path.resolve(__dirname, 'src/styles/'),
  })
);
