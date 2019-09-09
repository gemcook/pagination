import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Button, Welcome} from '@storybook/react/demo';
import {withState} from '@dump247/storybook-state';

import {Pagination} from '../';

import 'rc-pagination/dist/rc-pagination.min.css';
import '../styles/index.scss';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Pagination', module)
  .add(
    'default',
    withState({current: 1})(props => {
      return (
        <Pagination
          current={props.store.state.current}
          totalCount={80}
          showLessItems
          changePage={page => {
            props.store.set({current: page});
          }}
        />
      );
    })
  )
  .add(
    'size of mini',
    withState({current: 1})(props => {
      return (
        <Pagination
          current={props.store.state.current}
          totalCount={1234}
          changePage={page => {
            props.store.set({current: page});
          }}
          size="mini"
        />
      );
    })
  )
  .add(
    'disabled',
    withState({current: 1, disabled: true})(props => {
      return (
        <Pagination
          current={props.store.state.current}
          totalCount={1234}
          changePage={page => {
            props.store.set({current: page});
          }}
          disabled={props.store.state.disabled}
        />
      );
    })
  )
  .add(
    'locale en_US',
    withState({current: 1})(props => {
      return (
        <Pagination
          current={props.store.state.current}
          totalCount={1234}
          changePage={page => {
            props.store.set({current: page});
          }}
          locale="en_US"
        />
      );
    })
  )
  .add(
    'totalCount is 0',
    withState({current: 1})(props => {
      return (
        <Pagination
          current={props.store.state.current}
          totalCount={0}
          changePage={page => {
            props.store.set({current: page});
          }}
        />
      );
    })
  )
  .add(
    'change page size',
    withState({current: 1, pageSize: 10})(props => {
      return (
        <Pagination
          current={props.store.state.current}
          pageSize={props.store.state.pageSize}
          totalCount={1234}
          showSizeChanger
          changePage={page => {
            props.store.set({current: page});
          }}
          changePageSize={(current, size) => {
            props.store.set({pageSize: size});
          }}
        />
      );
    })
  );
