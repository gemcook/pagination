import React from 'react';
import RcPagination from 'rc-pagination';
import RcSelect from 'rc-select';
import classNames from 'classnames';

import data from '../../../data';
import {PAGINATION} from '../../../constants';
import * as handlers from './handlers';
import {PaginationProps} from './types';

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
        pageSize={props.pageSize ? props.pageSize : PAGINATION.DEFAULT_PAGESIZE}
        onChange={
          props.scrollTop
            ? handlers.changePageWithScrollTop(props)
            : props.changePage
        }
        locale={
          props.locale === 'en_US' ? data.locale.en_US : data.locale.ja_JP
        }
        {...(props.showSizeChanger && {selectComponentClass: RcSelect})}
        showSizeChanger={props.showSizeChanger || false}
        onShowSizeChange={props.changePageSize}
      />
    </div>
  );
};

export default Pagination;
