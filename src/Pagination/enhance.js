/* @flow */
import {compose, setDisplayName, type HOC} from 'recompose';

const enhance: HOC<*, *> = compose(setDisplayName('Pagination'));

export default enhance;
