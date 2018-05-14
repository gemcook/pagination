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

### State & Store

```
  pages: {
    active: [],
    first: [],
    last: [],
    before_distant: [],
    before_near: [],
    after_near: [],
    after_distant: [],
  },
  totalCount: 0,
  totalPages: 0,
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
| totalCount      | number                                      | true         | undefined   | \-                                                                       |
| current         | number                                      | true         | undefined   | \-                                                                       |
| changePage      | (current: number) => void                   | true         | undefined   | \-                                                                       |
| pageSize        | number                                      | false        | 10          | current page size. It is a required item if `showSizeChanger` is `true`. |
| showSizeChanger | boolean                                     | false        | false       | \-                                                                       |
| changePageSize  | (current: number, pageSize: number) => void | false        | undefined   | Required when 'showSizeChanger' is true.                                 |
| disabled        | boolean                                     | false        | false       | disabled mode.                                                           |
| size            | enum                                        | false        | undefined   | Enums: `'mini'`                                                          |
| locale          | enum                                        | false        | 'ja_JP'     | Enums: `'ja_JP'` `'us_EN'`                                               |
| scrollTop       | boolean                                     | false        | false       | \-                                                                       |

### Overried Styles

```scss
$pagination__main-color: #fa6681 !default;
$pagination__options-active-color: #ecf0f1 !default;
```

### API

#### makeLocalActive

* 'makeLocalActive' generates 'activeData' from the target data.

##### args

```js
makeLocalActive(
  data: Array<Object>,
  current: number,
  pageSize: number,
): Array<Object>
```

#### makeRemoteActive

* 'makeRemoteActive' generates 'activeData' from the target data.

##### args

```js
makeRemoteActive(
  pages: Object,
  current: number,
  nextCurrent: number,
  totalPages: number,
): Array<Object>
```

#### makeRemoteActiveWithImmutable

* 'makeRemoteActiveWithImmutable' generates 'active' from the target data.
* Return 'Record' of 'immutable.js'

##### args

```js
makeRemoteActiveWithImmutable(
  state: any,
  keyPathToPages: [string],
  current: number,
  nextCurrent: number,
  totalPages: number,
): Array<Object>
```

## License

@gemcook/pagination is released under the MIT license.
