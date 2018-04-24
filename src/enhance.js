/* @flow */
import {compose, setDisplayName, lifecycle} from 'recompose';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('Pagination'),
  lifecycle({
    componentDidMount() {
      console.log('api');
    },
  }),
);

export default enhance;
