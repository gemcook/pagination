import {Pagination} from './components/core';
import utils from './lib/utils';

import 'rc-pagination/dist/rc-pagination.min.css';
import './styles/index.scss';

export {Pagination};
export const makeLocalActive = utils.pagination.makeLocalActive;
export const makeRemoteActive = utils.pagination.makeRemoteActive;
export const makeRemoteActiveWithImmutable =
  utils.pagination.makeRemoteActiveWithImmutable;
