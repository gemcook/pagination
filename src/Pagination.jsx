/* @flow */
import * as React from 'react';
import RcPagination from 'rc-pagination';
import RcSelect from 'rc-select';
import classNames from 'classnames';
import {en_US, ja_JP} from './locale';
import enhance from './enhancer';

import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';

type Props = {
  changePage: () => void,
  current: number,
  totalCount: number,
  size?: string,
  locale?: string,
  showSizeChanger?: boolean,
  pageSize?: number,
  changePageSize?: () => void,
  disabled?: boolean,
  showLessItems?: boolean,
  scrollTop?: boolean,
  changePageWithScrollTop: () => void,
};

const defaultPageSize = 10;

function Pagination(props: Props) {
  const {
    changePage,
    current,
    totalCount,
    size,
    locale,
    showSizeChanger,
    pageSize,
    changePageSize,
    disabled,
    scrollTop,
    changePageWithScrollTop,
  } = props;

  return (
    <div className="gc__pagination">
      <RcPagination
        style={{
          display: totalCount ? 'block' : 'none',
        }}
        className={classNames({
          small_size: size === 'small',
          disabled,
        })}
        total={totalCount}
        current={current}
        showLessItems
        pageSize={pageSize ? pageSize : defaultPageSize}
        onChange={scrollTop ? changePageWithScrollTop : changePage}
        simple={size === 'mini'}
        locale={locale === 'en_US' ? en_US : ja_JP}
        selectComponentClass={showSizeChanger ? RcSelect : null}
        showSizeChanger={showSizeChanger || false}
        onShowSizeChange={changePageSize}
      />
    </div>
  );
}

export default enhance(props => <Pagination {...props} />);
