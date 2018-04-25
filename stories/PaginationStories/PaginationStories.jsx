import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Pagination} from '../../src';
import {withState} from '@dump247/storybook-state';

const PaginationStories = () => {
  storiesOf('Pagination', module)
    .add(
      'default',
      withState({current: 1})(
        withInfo('default')(({store}) => {
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
      ),
    )
    .add(
      'size of mini',
      withState({current: 1})(
        withInfo('size of mini')(({store}) => {
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
      ),
    )
    .add(
      'disabled',
      withState({current: 1, disabled: true})(
        withInfo('disabled')(({store}) => {
          return (
            <Pagination
              current={store.state.current}
              total={1234}
              changePage={current => {
                store.set({current});
              }}
              disabled={store.state.disabled}
            />
          );
        }),
      ),
    )
    .add(
      'locale en_US',
      withState({current: 1})(
        withInfo('locale en_US')(({store}) => {
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
      ),
    )
    .add(
      'total is 0',
      withState({current: 1})(
        withInfo('total is 0')(({store}) => {
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
      ),
    )
    .add(
      'change page size',
      withState({current: 1, pageSize: 10})(
        withInfo('change page size')(({store}) => {
          return (
            <Pagination
              total={1234}
              current={store.state.current}
              pageSize={store.state.pageSize}
              changePage={current => {
                store.set({current});
              }}
              showSizeChanger
              changePageSize={(current, pageSize) => {
                store.set({pageSize});
              }}
            />
          );
        }),
      ),
    );
};

export default PaginationStories;
