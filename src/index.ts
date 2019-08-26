import * as core from './components/core';
import utils from './lib/utils';

import 'rc-pagination/assets/index.css';
import './styles/index.scss';

export const {Pagination} = core;
export const {makeLocalActive} = utils.pagination;
export const {makeRemoteActive} = utils.pagination;
export const {makeRemoteActiveWithImmutable} = utils.pagination;
