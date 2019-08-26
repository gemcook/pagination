import React from 'react';
import RcPagination from 'rc-pagination';
import classNames from 'classnames';

import data from '../../../data';
import {PaginationProps} from './types';

import './index.scss';

const defaultPageSize = 10;

const Pagination: React.FC<PaginationProps> = props => {
  return (
    <div className="gc__pagination">
      <RcPagination
        style={{
          display: props.totalCount ? 'block' : 'none',
        }}
        className={classNames({
          small_size: props.size === 'small',
          disabled: props.disabled,
        })}
        total={props.totalCount}
        current={props.current}
        showLessItems
        pageSize={props.pageSize || defaultPageSize}
        onChange={props.changePage}
        locale={
          props.locale === 'en_US' ? data.locale.en_US : data.locale.ja_JP
        }
        showSizeChanger={props.showSizeChanger}
        onShowSizeChange={props.changePageSize}
      />
    </div>
  );
};

export default Pagination;
