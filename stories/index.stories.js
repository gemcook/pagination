/* @flow */
import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';

import {Welcome} from '@storybook/react/demo';

import {Pagination} from '../src';

import '../lib/base.css';
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Pagination', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('no props', () => <Pagination />)
  .add('with props', () => <Pagination currentPage={1} total={30} />);
