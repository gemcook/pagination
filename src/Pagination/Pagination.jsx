/* @flow */
import React from 'react';
import enhance from './enhance';
import RcPagination from 'rc-pagination';

function Pagination(props) {
  const {changePage, currentPage, total} = props;

  return (
    <div className="gc__pagination">
      <RcPagination onChange={changePage} current={currentPage} total={total} />
    </div>
  );
}

export default enhance(props => <Pagination {...props} />);
