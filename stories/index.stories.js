/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {Welcome} from '@storybook/react/demo';
import {Pagination} from '../src';
import {withState} from '@dump247/storybook-state';
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
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
          total={1234}
          changePage={current => {
            store.set({current});
          }}
        />
      );
    }),
  )
  .add(
    'size of mini',
    withState({current: 1})(({store}) => {
      return (
        <Pagination
          current={store.state.current}
          total={1234}
          changePage={current => {
            store.set({current});
          }}
          size="mini"
        />
      );
    }),
  )
  .add(
    'size of small',
    withState({current: 1})(({store}) => {
      return (
        <Pagination
          current={store.state.current}
          total={1234}
          changePage={current => {
            store.set({current});
          }}
          size="small"
        />
      );
    }),
  )
  .add(
    'locale en_US',
    withState({current: 1})(({store}) => {
      return (
        <Pagination
          current={store.state.current}
          total={1234}
          changePage={current => {
            store.set({current});
          }}
          locale="en_US"
        />
      );
    }),
  )
  .add(
    'total is 0',
    withState({current: 1})(({store}) => {
      return (
        <Pagination
          current={store.state.current}
          total={0}
          changePage={current => {
            store.set({current});
          }}
        />
      );
    }),
  )
  .add(
    'pager',
    withState({current: 1, pageSize: 10})(({store}) => {
      return (
        <Pagination
          current={store.state.current}
          total={1234}
          changePage={current => {
            store.set({current});
          }}
          showSizeChanger
          onShowSizeChange={(current, pageSize) => {
            store.set({pageSize});
          }}
          pageSize={store.state.pageSize}
        />
      );
    }),
  )
  .add(
    'pager (size options)',
    withState({current: 1, pageSize: 15})(({store}) => {
      return (
        <Pagination
          current={store.state.current}
          total={1234}
          changePage={current => {
            store.set({current});
          }}
          showSizeChanger
          pageSize={store.state.pageSize}
          onShowSizeChange={(current, pageSize) => {
            store.set({pageSize});
          }}
          pageSizeOptions={['15', '30', '100', '1000']}
        />
      );
    }),
  );
