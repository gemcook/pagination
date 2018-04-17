/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {Welcome} from '@storybook/react/demo';
import {Pagination} from '../src';
import {withState} from '@dump247/storybook-state';
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Pagination', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add(
    'default',
    withState({current: 1})(({store}) => {
      return (
        <Pagination
          current={store.state.current}
          total={100}
          changePage={current => {
            store.set({current});
          }}
        />
      );
    }),
  );
