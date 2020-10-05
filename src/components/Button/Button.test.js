import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './Button';
const { assert } = require('chai');
const { fake } = require('sinon');

afterEach(cleanup);

describe('Button', () => {
  it('should render a button', () => {
    const text = 'Simple Button';
    const { getByTestId } = render(
      <Button data-testid='button-test' text={text} />
    );
    const button = getByTestId('button-test');
    assert.strictEqual(button.textContent, text);
  });

  it('should call the listener when clicked', () => {
    const text = 'Simple Button';
    const fakeClick = fake();
    const { getByTestId } = render(
      <Button data-testid='button-test' text={text} onClick={fakeClick} />
    );
    const button = getByTestId('button-test');
    assert.strictEqual(button.textContent, text);
    fireEvent.click(button);
    assert.strictEqual(fakeClick.callCount, 1);
  });
});
