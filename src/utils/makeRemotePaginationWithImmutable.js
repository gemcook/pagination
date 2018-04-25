/* @flow */
export default function makeRemotePaginationWithImmutable(
  state: any,
  nextCurrent: number,
  current: number,
  last: number,
) {
  const afterNearCount = current + 1;
  const afterDistantCount = current + 2;
  const beforeNearCount = current - 1;
  const beforeDistantCount = current - 2;

  const pages: any = state.get('pages');

  if (nextCurrent === 1) {
    state.updateIn(['pages', 'active'], v => pages.first);
  } else if (nextCurrent === last) {
    state.updateIn(['pages', 'active'], v => pages.last);
  } else if (current === last && nextCurrent === last - 1) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (current === last && nextCurrent === last - 2) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (current === last && nextCurrent === last - 3) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (current === last && nextCurrent === last - 4) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  } else if (current === last - 1 && nextCurrent === last) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (current === last - 1 && nextCurrent === last - 2) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (current === last - 1 && nextCurrent === last - 3) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (current === last - 1 && nextCurrent === last - 4) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  } else if (nextCurrent === 2 && current === 1) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  } else if (nextCurrent === 3 && current === 1) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (nextCurrent === 4 && current === 1) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (nextCurrent === 5 && current === 1) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (nextCurrent === 3 && current === 2) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (nextCurrent === 4 && current === 2) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (nextCurrent === 5 && current === 2) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (nextCurrent === afterNearCount) {
    state.updateIn(['pages', 'active'], v => pages.after_near);
  } else if (nextCurrent === afterDistantCount) {
    state.updateIn(['pages', 'active'], v => pages.after_distant);
  } else if (nextCurrent === beforeNearCount) {
    state.updateIn(['pages', 'active'], v => pages.before_near);
  } else if (nextCurrent === beforeDistantCount) {
    state.updateIn(['pages', 'active'], v => pages.before_distant);
  }
  return state;
}
