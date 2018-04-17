/* @flow */
export default function pagination(
  data: Array<*>,
  currentPage: number,
  updateCurrentPage: number => void,
): Array<*> {
  let startIndex;
  let endIndex;
  let targetPage = currentPage;

  if (String(data.length).slice(-1) === '0' && targetPage !== 1) {
    targetPage -= 1;
    updateCurrentPage(targetPage);
  }

  if (targetPage === 1) {
    startIndex = 0;
    endIndex = 10;
  } else {
    startIndex = Number(String(targetPage - 1) + '0');
    endIndex = Number(String(targetPage) + '0');
  }

  return data.slice(startIndex, endIndex);
}
