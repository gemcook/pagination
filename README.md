# [@gemcook/pagination](https://pagination.storybook.gemcook.com)

---

[![npm version](https://badge.fury.io/js/%40gemcook%2Fpagination.svg)](https://badge.fury.io/js/%40gemcook%2Fpagination)

React Pagination Component.

## Online Demo

* https://pagination.storybook.gemcook.com

## Installation

```shell
npm install --save @gemcook/pagination
```

or

```shell
yarn add @gemcook/pagination
```

## Usage

### SCSS

#### Import `@gemcook/pagination/lib/styles/index.scss` to your SCSS.

```scss
@import "~@gemcook/pagination/lib/styles/index";
```

## Examples

### default

```jsx
<Pagination
  total={1234}
  current={store.state.current}
  pageSize={10}
  changePage={current => {
    store.set({ current });
  }}
/>
```

### size of mini

```jsx
<Pagination
  total={1234}
  current={store.state.current}
  pageSize={10}
  changePage={current => {
    store.set({ current });
  }}
  size="mini"
/>
```

### change page size

```jsx
<Pagination
  total={1234}
  current={store.state.current}
  pageSize={store.state.pageSize}
  changePage={current => {
    store.set({ current });
  }}
  showSizeChanger
  changePageSize={(current, pageSize) => {
    store.set({ pageSize });
  }}
/>
```

## Documentaion

### Props

| **Parameter**   | **Type**                                    | **Required** | **Default** | **Description**                                                          |
| :-------------- | :------------------------------------------ | :----------- | :---------- | :----------------------------------------------------------------------- |
| total           | number                                      | true         | undefined   | \-                                                                       |
| current         | number                                      | true         | undefined   | \-                                                                       |
| changePage      | () => void                                  | true         | undefined   | \-                                                                       |
| pageSize        | number                                      | false        | 10          | current page size. It is a required item if `showSizeChanger` is `true`. |
| showSizeChanger | boolean                                     | false        | false       | \-                                                                       |
| changePageSize  | (current: number, pageSize: number) => void | false        | undefined   | Required when 'showSizeChanger' is true.                                 |
| disabled        | boolean                                     | false        | false       | disabled mode.                                                           |
| size            | enum                                        | false        | undefined   | Enums: `'mini'`                                                          |
| locale          | enum                                        | false        | 'ja_JP'     | Enums: `'ja_JP'` `'us_EN'`                                               |
| scrollTop       | boolean                                     | false        | false       | \-                                                                       |

### API

#### makeLocalActiveData

* 'makeLocalActiveData' generates 'activeData' from the target data.

```js
```

#### makeRemotePagination

* 'makeRemotePagination' generates 'activeData' from the target data.

```js
```

#### makeRemotePaginationWithImmutable

* 'makeRemotePaginationWithImmutable' generates 'activeData' from the target data.

```js
```

## License

@gemcook/pagination is released under the MIT license.
