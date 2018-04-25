/* @flow */
import React from 'react';
import RcPagination from 'rc-pagination';
import RcSelect from 'rc-select';
import classNames from 'classnames';
import {en_US, ja_JP} from './locale';

import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';

type Props = {
  changePage: () => void,
  current: number,
  total: number,
  size?: string,
  locale?: string,
  showSizeChanger?: boolean,
  pageSize?: number,
  changePageSize?: () => void,
  disabled?: boolean,
};

function Pagination(props: Props) {
  const {
    changePage,
    current,
    total,
    size,
    locale,
    showSizeChanger,
    pageSize,
    changePageSize,
    disabled,
  } = props;

  return (
    <div className="gc__pagination">
      <RcPagination
        style={{
          display: total ? 'block' : 'none',
        }}
        className={classNames({
          small_size: size === 'small',
          disabled: disabled,
        })}
        total={total}
        current={current}
        pageSize={pageSize ? pageSize : 10}
        onChange={changePage}
        simple={size === 'mini'}
        locale={locale === 'en_US' ? en_US : ja_JP}
        selectComponentClass={showSizeChanger ? RcSelect : null}
        showSizeChanger={showSizeChanger || false}
        onShowSizeChange={changePageSize}
      />
    </div>
  );
}

export default Pagination;
