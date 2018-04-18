/* @flow */
import React from 'react';
import enhance from './enhance';
import RcPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {en_US, ja_JP} from './locale';

type Props = {
  changePage: () => void,
  current: number,
  total: number,
  simple?: boolean,
  locale?: string,
};

function Pagination(props: Props) {
  const {changePage, current, total, simple, locale} = props;

  return (
    <div className="gc__pagination">
      <RcPagination
        onChange={changePage}
        current={current}
        total={total}
        style={{
          display: total ? 'block' : 'none',
        }}
        simple={simple}
        locale={locale === 'en_US' ? en_US : ja_JP}
      />
    </div>
  );
}

export default enhance(props => <Pagination {...props} />);
