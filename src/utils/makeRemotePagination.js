/* @flow */
export default function makeRemotePagination(
  pages: Object,
  nextCurrent: number,
  current: number,
  last: number,
  updateActive: ([]) => void,
) {
  const afterNearCount = current + 1;
  const afterDistantCount = current + 2;
  const beforeNearCount = current - 1;
  const beforeDistantCount = current - 2;

  if (nextCurrent === 1) {
    updateActive(pages.first);
  } else if (nextCurrent === last) {
    updateActive(pages.last);
  } else if (current === last && nextCurrent === last - 1) {
    updateActive(pages.afterDistant);
  } else if (current === last && nextCurrent === last - 2) {
    updateActive(pages.afterNear);
  } else if (current === last && nextCurrent === last - 3) {
    updateActive(pages.beforeNear);
  } else if (current === last && nextCurrent === last - 4) {
    updateActive(pages.beforeDistant);
  } else if (current === last - 1 && nextCurrent === last) {
    updateActive(pages.afterDistant);
  } else if (current === last - 1 && nextCurrent === last - 2) {
    updateActive(pages.afterNear);
  } else if (current === last - 1 && nextCurrent === last - 3) {
    updateActive(pages.beforeNear);
  } else if (current === last - 1 && nextCurrent === last - 4) {
    updateActive(pages.beforeDistant);
  } else if (nextCurrent === 2 && current === 1) {
    updateActive(pages.beforeDistant);
  } else if (nextCurrent === 3 && current === 1) {
    updateActive(pages.beforeNear);
  } else if (nextCurrent === 4 && current === 1) {
    updateActive(pages.afterNear);
  } else if (nextCurrent === 5 && current === 1) {
    updateActive(pages.afterDistant);
  } else if (nextCurrent === 3 && current === 2) {
    updateActive(pages.beforeNear);
  } else if (nextCurrent === 4 && current === 2) {
    updateActive(pages.afterNear);
  } else if (nextCurrent === 5 && current === 2) {
    updateActive(pages.afterDistant);
  } else if (nextCurrent === afterNearCount) {
    updateActive(pages.afterNear);
  } else if (nextCurrent === afterDistantCount) {
    updateActive(pages.afterDistant);
  } else if (nextCurrent === beforeNearCount) {
    updateActive(pages.beforeNear);
  } else if (nextCurrent === beforeDistantCount) {
    updateActive(pages.beforeDistant);
  }
}
