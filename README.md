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

```jsx
<Pagination
  current={store.state.current}
  total={1234}
  changePage={current => {
    store.set({ current });
  }}
/>
```

## Documentaion

### Props

| **Parameter**    | **Type**                                    | **Required** | **Default**                    | **Description**                          |
| :--------------- | :------------------------------------------ | :----------- | :----------------------------- | :--------------------------------------- |
| current          | number                                      | true         | undefined                      | \-                                       |
| total            | number                                      | true         | undefined                      | \-                                       |
| changePage       | () => void                                  | true         | undefined                      | \-                                       |
| pageSize         | number                                      | true         | 10                             | current page size.                       |
| size             | enum                                        | false        | undefined                      | Enums: `'mini'` `'small'`                |
| locale           | enum                                        | false        | 'ja_JP'                        | Enums: `'ja_JP'` `'us_EN'`               |
| showSizeChanger  | boolean                                     | false        | false                          | \-                                       |
| onShowSizeChange | (current: number, pageSize: number) => void | false        | undefined                      | Required when 'showSizeChanger' is true. |
| pageSizeOptions  | [string]                                    | false        | ['10', '20', '30', '40', '50'] | \-                                       |

### API

## License

@gemcook/pagination is released under the MIT license.
