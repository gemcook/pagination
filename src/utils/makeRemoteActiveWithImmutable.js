/* @flow */
export default function makeRemoteActiveWithImmutable(
  state: any,
  keyPathToPages: [string],
  current: number,
  nextCurrent: number,
  totalPages: number,
): Array<Object> {
  const afterNearCount = current + 1;
  const afterDistantCount = current + 2;
  const beforeNearCount = current - 1;
  const beforeDistantCount = current - 2;

  const pages: any = state.getIn(keyPathToPages);

  if (nextCurrent === 1) {
    return pages.first;
  } else if (nextCurrent === totalPages) {
    return pages.last;
  } else if (current === totalPages && nextCurrent === totalPages - 1) {
    return pages.after_distant;
  } else if (current === totalPages && nextCurrent === totalPages - 2) {
    return pages.after_near;
  } else if (current === totalPages && nextCurrent === totalPages - 3) {
    return pages.before_near;
  } else if (current === totalPages && nextCurrent === totalPages - 4) {
    return pages.before_distant;
  } else if (current === totalPages - 1 && nextCurrent === totalPages) {
    return pages.after_distant;
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 2) {
    return pages.after_near;
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 3) {
    return pages.before_near;
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 4) {
    return pages.before_distant;
  } else if (nextCurrent === 2 && current === 1) {
    return pages.before_distant;
  } else if (nextCurrent === 3 && current === 1) {
    return pages.before_near;
  } else if (nextCurrent === 4 && current === 1) {
    return pages.after_near;
  } else if (nextCurrent === 5 && current === 1) {
    return pages.after_distant;
  } else if (nextCurrent === 3 && current === 2) {
    return pages.before_near;
  } else if (nextCurrent === 4 && current === 2) {
    return pages.after_near;
  } else if (nextCurrent === 5 && current === 2) {
    return pages.after_distant;
  } else if (nextCurrent === afterNearCount) {
    return pages.after_near;
  } else if (nextCurrent === afterDistantCount) {
    return pages.after_distant;
  } else if (nextCurrent === beforeNearCount) {
    return pages.before_near;
  } else if (nextCurrent === beforeDistantCount) {
    return pages.before_distant;
  }
  return pages.active;
}
