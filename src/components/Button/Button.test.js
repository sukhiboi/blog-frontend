import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './Button';
const { assert } = require('chai');
const { fake } = require('sinon');

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

describe('Button', () => {
  it('should render a button', () => {
    const text = 'Simple Button';
    act(() => {
      render(<Button text={text} />, container);
    });
    assert.strictEqual(container.textContent, text);
  });

  it('should call the listener when clicked', () => {
    const text = 'Simple Button';
    const fakeClick = fake();
    act(() => {
      render(<Button id='btn' text={text} onClick={fakeClick} />, container);
    });
    assert.strictEqual(container.textContent, text);
    const button = document.getElementById('btn');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    assert.strictEqual(fakeClick.callCount, 1);
  });
});
