import utils from './lib/utils';

import 'rc-pagination/assets/index.css';
import './styles/index.scss';

export * from './components/core';
export const {
  makeLocalActive,
  makeRemoteActive,
  makeRemoteActiveWithImmutable,
} = utils.pagination;
