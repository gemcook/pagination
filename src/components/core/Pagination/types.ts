import {PaginationProps as RcPaginationProps} from 'rc-pagination';

export type PaginationProps = {
  changePage: (page: number, pageSize: number) => void;
  current: number;
  totalCount: number;
  size?: string;
  locale?: string;
  showSizeChanger?: boolean;
  pageSize?: number;
  changePageSize?: RcPaginationProps['onShowSizeChange'];
  disabled?: boolean;
  showLessItems?: boolean;
  scrollTop?: boolean;
};

export type ChangePageWithScrollTop = (
  props: Pick<PaginationProps, 'changePage'>
) => RcPaginationProps['onChange'];
