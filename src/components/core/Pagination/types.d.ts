import {PaginationProps} from 'rc-pagination';

export type PaginationProps = {
  totalCount: number;
  size?: string;
  disabled?: boolean;
  current: number;
  pageSize: number;
  changePage: (props?: any) => PaginationProps['onChange'];
  locale?: string;
  showSizeChanger?: boolean;
  changePageSize?: () => void;
};
