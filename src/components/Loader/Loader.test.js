import React from 'react';
import Loader from './Loader';
import { render, cleanup } from '@testing-library/react';
const { assert } = require('chai');

afterEach(cleanup);

describe('Loader', () => {
  it('should render the loader', () => {
    const { getByTestId } = render(<Loader data-testid='loader-test' />);
    const loader = getByTestId('loader-test');
    assert.strictEqual(loader.textContent, 'Loading...');
  });
});
