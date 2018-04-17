/* @flow */
import React from 'react';
import enhance from './enhance';
import RcPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './../styles/index.scss';

type Props = {
  changePage: () => void,
  current: number,
  total: number,
};

function Pagination(props: Props) {
  const {changePage, current, total} = props;

  return (
    <div className="gc__pagination">
      <RcPagination
        onChange={changePage}
        current={current}
        total={total}
        style={{
          display: total ? 'block' : 'none',
        }}
      />
    </div>
  );
}

export default enhance(props => <Pagination {...props} />);
