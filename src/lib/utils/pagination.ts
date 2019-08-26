export const makeLocalActive = (
  data: {[key: string]: any}[],
  current: number,
  pageSize: number
) => {
  let startIndex;
  let endIndex;
  let nextCurrent = current;

  if (String(data.length).slice(-1) === '0' && nextCurrent !== 1) {
    nextCurrent -= 1;
  }

  if (nextCurrent === 1 && current === 1) {
    startIndex = 0;
    endIndex = pageSize;
  } else {
    startIndex = Number(
      String((current - 1) * Number(String(pageSize).slice(0, -1))) + '0'
    );
    endIndex = Number(
      String(current * Number(String(pageSize).slice(0, -1))) + '0'
    );
  }

  return data.slice(startIndex, endIndex);
};

export const makeRemoteActive = (
  pages: {[key: string]: any},
  current: number,
  nextCurrent: number,
  totalPages: number
) => {
  const afterNearCount = current + 1;
  const afterDistantCount = current + 2;
  const beforeNearCount = current - 1;
  const beforeDistantCount = current - 2;

  if (nextCurrent === 1) {
    return pages.first;
  } else if (nextCurrent === totalPages) {
    return pages.last;
  } else if (
    current === totalPages &&
    totalPages === 4 &&
    nextCurrent === totalPages - 1
  ) {
    return pages.afterNear;
  } else if (
    current === totalPages &&
    totalPages === 4 &&
    nextCurrent === totalPages - 2
  ) {
    return pages.beforeNear;
  } else if (
    current === totalPages - 1 &&
    totalPages === 4 &&
    nextCurrent === totalPages - 2
  ) {
    return pages.beforeNear;
  } else if (
    current === totalPages &&
    totalPages === 3 &&
    nextCurrent === totalPages - 1
  ) {
    return pages.beforeNear;
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
};

export const makeRemoteActiveWithImmutable = (
  state: any,
  keyPathToPages: string[],
  current: number,
  nextCurrent: number,
  totalPages: number
) => {
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
};
