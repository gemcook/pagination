/* @flow */
export default function makeRemoteActiveWithImmutable(
  state: any,
  keyPathToPages: [string],
  keyPathToActive: [string],
  current: number,
  nextCurrent: number,
  totalPages: number,
): Object {
  const afterNearCount = current + 1;
  const afterDistantCount = current + 2;
  const beforeNearCount = current - 1;
  const beforeDistantCount = current - 2;

  const pages: any = state.getIn(keyPathToPages);

  if (nextCurrent === 1) {
    state.updateIn(keyPathToActive, v => pages.first);
  } else if (nextCurrent === totalPages) {
    state.updateIn(keyPathToActive, v => pages.totalPages);
  } else if (current === totalPages && nextCurrent === totalPages - 1) {
    state.updateIn(keyPathToActive, v => pages.after_distant);
  } else if (current === totalPages && nextCurrent === totalPages - 2) {
    state.updateIn(keyPathToActive, v => pages.after_near);
  } else if (current === totalPages && nextCurrent === totalPages - 3) {
    state.updateIn(keyPathToActive, v => pages.before_near);
  } else if (current === totalPages && nextCurrent === totalPages - 4) {
    state.updateIn(keyPathToActive, v => pages.before_distant);
  } else if (current === totalPages - 1 && nextCurrent === totalPages) {
    state.updateIn(keyPathToActive, v => pages.after_distant);
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 2) {
    state.updateIn(keyPathToActive, v => pages.after_near);
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 3) {
    state.updateIn(keyPathToActive, v => pages.before_near);
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 4) {
    state.updateIn(keyPathToActive, v => pages.before_distant);
  } else if (nextCurrent === 2 && current === 1) {
    state.updateIn(keyPathToActive, v => pages.before_distant);
  } else if (nextCurrent === 3 && current === 1) {
    state.updateIn(keyPathToActive, v => pages.before_near);
  } else if (nextCurrent === 4 && current === 1) {
    state.updateIn(keyPathToActive, v => pages.after_near);
  } else if (nextCurrent === 5 && current === 1) {
    state.updateIn(keyPathToActive, v => pages.after_distant);
  } else if (nextCurrent === 3 && current === 2) {
    state.updateIn(keyPathToActive, v => pages.before_near);
  } else if (nextCurrent === 4 && current === 2) {
    state.updateIn(keyPathToActive, v => pages.after_near);
  } else if (nextCurrent === 5 && current === 2) {
    state.updateIn(keyPathToActive, v => pages.after_distant);
  } else if (nextCurrent === afterNearCount) {
    state.updateIn(keyPathToActive, v => pages.after_near);
  } else if (nextCurrent === afterDistantCount) {
    state.updateIn(keyPathToActive, v => pages.after_distant);
  } else if (nextCurrent === beforeNearCount) {
    state.updateIn(keyPathToActive, v => pages.before_near);
  } else if (nextCurrent === beforeDistantCount) {
    state.updateIn(keyPathToActive, v => pages.before_distant);
  }
  return state;
}
