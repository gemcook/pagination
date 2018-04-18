# [@gemcook/pagination](https://pagination.storybook.gemcook.com)

---

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

| **Parameter** | **Type** | **Required** | **Description** |
| :------------ | :------- | :----------- | :-------------- |
| current       | Number   | true         | \-              |
| total         | Number   | true         | \-              |
| changePage    | Function | true         | \-              |

### API

## License

@gemcook/pagination is released under the MIT license.
