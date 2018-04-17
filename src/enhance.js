/* @flow */
import {compose, setDisplayName} from 'recompose';
import type {HOC} from 'recompose';

const enhance: HOC<*, *> = compose(setDisplayName('Pagination'));

export default enhance;
