import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import DragAndZoom from 'src/';

describe('Component', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('Renders the component as expected', () => {
    render(
      <DragAndZoom zoomStep={1} initialZoom={50} minZoom={20} maxZoom={200}>
        <span>I can be zoomed and dragged</span>
      </DragAndZoom>,
      node,
      () => {
        expect(node.innerHTML).toContain('class="react-draggable"');
        expect(node.innerHTML).toContain('transform: translate(0px, 0px);');
        expect(node.innerHTML).toContain('I can be zoomed and dragged');
      }
    );
  });
});
