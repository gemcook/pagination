/* @flow */
export default function asyncPagination(
  state: any,
  page: number,
  currentPage: number,
  lastPage: number,
) {
  const afterNearCount = currentPage + 1;
  const afterDistantCount = currentPage + 2;
  const beforeNearCount = currentPage - 1;
  const beforeDistantCount = currentPage - 2;

  const pages: any = state.get('pages');

  if (page === 1) {
    state.updateIn(['pages', 'active'], v => pages.first);
  } else if (page === lastPage) {
    state.updateIn(['pages', 'active'], v => pages.last);
  } else if (currentPage === lastPage && page === lastPage - 1) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (currentPage === lastPage && page === lastPage - 2) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (currentPage === lastPage && page === lastPage - 3) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (currentPage === lastPage && page === lastPage - 4) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  } else if (currentPage === lastPage - 1 && page === lastPage) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (currentPage === lastPage - 1 && page === lastPage - 2) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (currentPage === lastPage - 1 && page === lastPage - 3) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (currentPage === lastPage - 1 && page === lastPage - 4) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  } else if (page === 2 && currentPage === 1) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  } else if (page === 3 && currentPage === 1) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (page === 4 && currentPage === 1) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (page === 5 && currentPage === 1) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (page === 3 && currentPage === 2) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (page === 4 && currentPage === 2) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (page === 5 && currentPage === 2) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (page === afterNearCount) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (page === afterDistantCount) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (page === beforeNearCount) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (page === beforeDistantCount) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  }
  return state;
}
