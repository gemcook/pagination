/* @flow */
import React from 'react';
import classNames from 'classnames';
import enhance from './enhance';
import RcPagination from 'rc-pagination';
import Select from 'rc-select';
import {Pagination} from '../../src';

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
  handleChangePage: (page: number) => void,
};

function AsyncPagination(props: Props) {
  return (
    <>
      <Pagination
        current={props.current}
        total={1234}
        changePage={current => {
          props.handleChangePage(current);
        }}
      />
    </>
  );
}

export default enhance(props => <AsyncPagination {...props} />);
