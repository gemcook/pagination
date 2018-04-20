/* @flow */
import React from 'react';
import classNames from 'classnames';
import enhance from './enhance';
import RcPagination from 'rc-pagination';
import Select from 'rc-select';
import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';
import {en_US, ja_JP} from './locale';

type Props = {
  changePage: () => void,
  current: number,
  total: number,
  size?: string,
  locale?: string,
  showSizeChanger?: boolean,
  pageSize?: number,
  onShowSizeChange?: () => void,
  pageSizeOptions?: [string],
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
    onShowSizeChange,
    pageSizeOptions,
  } = props;

  return (
    <div className="gc__pagination">
      <RcPagination
        onChange={changePage}
        current={current}
        total={total}
        style={{
          display: total ? 'block' : 'none',
        }}
        className={classNames({
          small_size: size === 'small',
        })}
        simple={size === 'mini'}
        locale={locale === 'en_US' ? en_US : ja_JP}
        selectComponentClass={showSizeChanger ? Select : null}
        showSizeChanger={showSizeChanger || false}
        pageSize={pageSize ? pageSize : 10}
        onShowSizeChange={onShowSizeChange}
        pageSizeOptions={
          pageSizeOptions ? pageSizeOptions : ['10', '20', '30', '40', '50']
        }
      />
    </div>
  );
}

export default enhance(props => <Pagination {...props} />);
