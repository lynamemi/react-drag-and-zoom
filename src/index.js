import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import Draggable from 'react-draggable';

const isNegative = n => ((n = +n) || 1 / n) < 0;

const updatePercentageBasedOnScroll = ({ percentage, min, max, step, delta }) => {
  const signedStep = isNegative(delta) ? step * -1 : step;
  const newPercentage = percentage + signedStep;
  if (newPercentage > max) return max;
  if (newPercentage < min) return min;
  return newPercentage;
};

class DragAndZoom extends PureComponent {
  static propTypes = {
    zoomStep: number,
    initialZoom: number,
    minZoom: number,
    maxZoom: number,
  };

  static defaultProps = {
    zoomStep: 0.6,
    initialZoom: 100,
    minZoom: 0,
    maxZoom: Number.MAX_SAFE_INTEGER,
  };

  state = {
    zoom: this.props.initialZoom || 100,
    originX: 50,
    originY: 50,
  };

  handleMouseWheel = e => {
    e.preventDefault();

    const { minZoom, maxZoom, zoomStep } = this.props;

    const zoom = updatePercentageBasedOnScroll({
      percentage: this.state.zoom,
      min: minZoom,
      max: maxZoom,
      step: zoomStep,
      delta: e.deltaY,
    });

    this.setState({
      zoom,
      originY: this.originCoordinates.y,
      originX: this.originCoordinates.x,
      isScrolling: true,
    });
  };

  handleMouseMove = e => {
    this.setState({ isScrolling: false });

    const { pageX, pageY } = e;
    const relativeX = pageX - this.target.getBoundingClientRect().left;
    const relativeY = pageY - this.target.getBoundingClientRect().top;
    const percentageX = relativeX * 100 / this.target.getBoundingClientRect().width;
    const percentageY = relativeY * 100 / this.target.getBoundingClientRect().height;
    this.originCoordinates = {
      x: percentageX,
      y: percentageY,
    };
  };

  render() {
    const { children, initialZoom, minZoom, maxZoom, zoomStep, ...other } = this.props;
    return (
      <div {...other}>
        <Draggable>
          <div>
            <div
              onWheel={this.handleMouseWheel}
              onMouseMove={this.handleMouseMove}
              ref={node => (this.target = node)}
              style={{
                ...children.props.style,
                cursor: this.state.isScrolling ? 'row-resize' : 'move',
                transition: 'transform-origin 1000ms ease-out',
                transform: `scale(${this.state.zoom / 100})`,
                transformOrigin: `${this.state.originX}% ${this.state.originY}%`,
              }}
            >
              {this.props.children}
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default DragAndZoom;
