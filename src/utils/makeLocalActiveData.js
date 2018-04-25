/* @flow */
export default function makeLocalActiveData(
  data: Array<*>,
  current: number,
  pageSize: number,
): Array<*> {
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
      String((current - 1) * Number(String(pageSize).slice(0, -1))) + '0',
    );
    endIndex = Number(
      String(current * Number(String(pageSize).slice(0, -1))) + '0',
    );
  }

  return data.slice(startIndex, endIndex);
}
