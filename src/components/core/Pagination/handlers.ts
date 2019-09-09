import {ChangePageWithScrollTop} from './types';

export const changePageWithScrollTop: ChangePageWithScrollTop = props => (
  page,
  pageSize
) => {
  window.scrollTo(0, 0);
  props.changePage(page, pageSize);
};
