/* @flow */
import {
  compose,
  withHandlers,
  withState,
  setDisplayName,
  lifecycle,
} from 'recompose';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('AsyncPagination'),
  withState('current', 'currentUpdater', 1),
  withHandlers({
    handleChangePage: props => current => {
      props.currentUpdater(current);
    },
  }),
  lifecycle({
    componentDidMount() {
      console.log(this.props.cuurent);
    },
    componentDidUpdate() {
      console.log(this.props.current);
    },
  }),
);

export default enhance;
