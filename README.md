# [@gemcook/pagination](https://pagination.storybook.gemcook.com)

## Demo

* [Storybook](https://modal.storybook.gemcook.com)

# Getting Started

## Installation

```shell
$ npm install --save @gemcook/pagination
```

or

```shell
$ yarn add @gemcook/pagination
```

## Usage

```jsx
<Pagination
  current={store.state.current}
  total={100}
  changePage={current => {
    store.set({ current });
  }}
/>
```

## Documentaion

### Props

### API
