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

## Install
```bash
yarn add react-drag-and-zoom

# Or, if using npm
npm install --save react-drag-and-zoom
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

## About Citrusbyte

![Citrusbyte](http://i.imgur.com/W6eISI3.png)

This software is lovingly maintained and funded by Citrusbyte.
At Citrusbyte, we specialize in solving difficult computer science problems for startups and the enterprise.

At Citrusbyte we believe in and support open source software.
* Check out more of our open source software at Citrusbyte Labs.
* Learn more about [our work](https://citrusbyte.com/portfolio).
* [Hire us](https://citrusbyte.com/contact) to work on your project.
* [Want to join the team?](http://careers.citrusbyte.com)

*Citrusbyte and the Citrusbyte logo are trademarks or registered trademarks of Citrusbyte, LLC.*

[npm-badge]: https://img.shields.io/npm/v/npm-package.svg?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
