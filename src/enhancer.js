/* @flow */
import {compose, setDisplayName, withHandlers} from 'recompose';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('Pagination'),
  withHandlers({
    changePageWithScrollTop: props => e => {
      window.scrollTo(0, 0);
      props.changePage(e);
    },
  })
);

export default enhance;
