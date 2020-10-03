import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TextBox from './TextBox';
const { assert } = require('chai');
const { fake } = require('sinon');

afterEach(cleanup);

describe('TextBox', () => {
  it('should render the TextBox with empty value when no value passed', () => {
    const { getByRole } = render(<TextBox />);
    const element = getByRole('textbox');
    assert.strictEqual(element.value, '');
  });

  it('should render the TextBox with passed value', () => {
    const value = 'sample';
    const { getByRole } = render(<TextBox value={value} />);
    const element = getByRole('textbox');
    assert.strictEqual(element.value, value);
  });

  it('should render the TextBox call the onChange listener', () => {
    const value = 'sample';
    const fakeOnChange = fake();
    const { getByRole } = render(
      <TextBox value={value} onChange={fakeOnChange} />
    );
    const element = getByRole('textbox');
    assert.strictEqual(element.value, value);
    fireEvent.input(element, { target: { value: 'changed value' } });
    assert.strictEqual(element.value, 'changed value');
  });
});
