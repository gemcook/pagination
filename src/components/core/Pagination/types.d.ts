import {PaginationProps} from 'rc-pagination';

export type PaginationProps = {
  totalCount: number;
  size?: string;
  disabled?: boolean;
  current: number;
  pageSize: number;
  changePage: PaginationProps['onChange'];
  locale?: string;
  showSizeChanger?: boolean;
  changePageSize?: PaginationProps['onShowSizeChange'];
};
