import React, { Component } from 'react';
import { render } from 'react-dom';
import 'normalize.css';

import DragAndZoom from '../../src';

const Team = () => (
  <div
    style={{
      backgroundImage: 'url(https://citrusbyte.com/images/topBanner/headers/team-homepage.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      display: 'inline-block',
      height: 'calc(80vh - 80px)',
      width: 'calc(80vw - 80px)',
    }}
  />
);

const ImageLink = ({ href, src, style, ...other }) => (
  <a
    href={href}
    style={{
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      height: '40px',
      width: '40px',
      ...style,
    }}
    {...other}
  />
);

class Demo extends Component {
  render() {
    return (
      <div
        style={{
          alignItems: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-between',
          overflow: 'hidden',
          width: '100vw',
        }}
      >
        <header
          style={{
            alignItems: 'center',
            backgroundColor: 'tomato',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            color: 'white',
            display: 'flex',
            fontSize: '32px',
            height: '80px',
            justifyContent: 'flex-end',
            padding: '0 20px 0 140px',
          }}
        >
          <code style={{ margin: 'auto' }}>react-drag-and-zoom</code>
          <ImageLink
            src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
            href="https://github.com/citrusbyte/react-drag-and-zoom"
            style={{ marginLeft: '20px' }}
          />
          <ImageLink
            src="https://cdn-images-1.medium.com/fit/c/200/200/1*eUDPDbG0pZSqnXuZWAmD6g.png"
            href="https://citrusbyte.com/"
            style={{ marginLeft: '20px' }}
          />
        </header>
        <main
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 200, 200, .4)',
          }}
        >
          <DragAndZoom
            minZoom={50}
            maxZoom={200}
            initialZoom={100}
            onZoom={(zoom, e) => console.log('onZoom', zoom, e)}
            onMouseDown={e => console.log('onMouseDown', e)}
            onDragStart={e => console.log('onDragStart', e)}
            onDrag={e => console.log('onDrag', e)}
            onDragStop={e => console.log('onDragStop', e)}
          >
            <Team />
          </DragAndZoom>
        </main>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
