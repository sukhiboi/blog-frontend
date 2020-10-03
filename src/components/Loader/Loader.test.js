import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Loader from './Loader';
const { assert } = require('chai');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Loader', () => {
  it('should render the loader', () => {
    act(() => {
      render(<Loader />, container);
    });
    assert.strictEqual(container.textContent, 'Loading...');
  });
});
