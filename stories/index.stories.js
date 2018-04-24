/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import {PaginationStories} from './PaginationStories';
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

PaginationStories();
