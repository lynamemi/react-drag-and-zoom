# react-drag-and-zoom
[![npm package][npm-badge]][npm]

[Demo!](https://react-drag-and-zoom.now.sh)

## Why
If you need to make a component draggable and zoomable on scroll, this component is for you.

## Usage
```js
<DragAndZoom>
  <span>I can be zoomed and dragged</span>
</DragAndZoom>
```

## Props
### `zoomStep: number`
This value is used to control zooming velocity. Default is `0.7`.

### `initialZoom: number`
Initial zoom percentage. Default is `100`.

### `minZoom: number`
Minimum zoom percentage that can be applied. Default is `0`.

### `maxZoom: number`
Maximum zoom percentage that can be applied. Default is `Number.MAX_SAFE_INTEGER`.

### Example with all props
```js
<DragAndZoom zoomStep={1} initialZoom={80} minZoom={20} maxZoom={200}>
  <span>I can be zoomed and dragged</span>
</DragAndZoom>
```

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
