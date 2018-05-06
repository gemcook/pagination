/* @flow */
export default function makeRemoteActive(
  pages: Object,
  current: number,
  nextCurrent: number,
  totalPages: number,
): Array<Object> {
  const afterNearCount = current + 1;
  const afterDistantCount = current + 2;
  const beforeNearCount = current - 1;
  const beforeDistantCount = current - 2;

  if (nextCurrent === 1) {
    return pages.first;
  } else if (nextCurrent === totalPages) {
    return pages.last;
  } else if (current === totalPages && nextCurrent === totalPages - 1) {
    return pages.afterDistant;
  } else if (current === totalPages && nextCurrent === totalPages - 2) {
    return pages.afterNear;
  } else if (current === totalPages && nextCurrent === totalPages - 3) {
    return pages.beforeNear;
  } else if (current === totalPages && nextCurrent === totalPages - 4) {
    return pages.beforeDistant;
  } else if (current === totalPages - 1 && nextCurrent === totalPages) {
    return pages.afterDistant;
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 2) {
    return pages.afterNear;
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 3) {
    return pages.beforeNear;
  } else if (current === totalPages - 1 && nextCurrent === totalPages - 4) {
    return pages.beforeDistant;
  } else if (nextCurrent === 2 && current === 1) {
    return pages.beforeDistant;
  } else if (nextCurrent === 3 && current === 1) {
    return pages.beforeNear;
  } else if (nextCurrent === 4 && current === 1) {
    return pages.afterNear;
  } else if (nextCurrent === 5 && current === 1) {
    return pages.afterDistant;
  } else if (nextCurrent === 3 && current === 2) {
    return pages.beforeNear;
  } else if (nextCurrent === 4 && current === 2) {
    return pages.afterNear;
  } else if (nextCurrent === 5 && current === 2) {
    return pages.afterDistant;
  } else if (nextCurrent === afterNearCount) {
    return pages.afterNear;
  } else if (nextCurrent === afterDistantCount) {
    return pages.afterDistant;
  } else if (nextCurrent === beforeNearCount) {
    return pages.beforeNear;
  } else if (nextCurrent === beforeDistantCount) {
    return pages.beforeDistant;
  }
  return pages.active;
}
