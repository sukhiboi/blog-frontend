import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, screen } from '@testing-library/react';
import Header from './Header';
const { assert } = require('chai');
const { fake } = require('sinon');

afterEach(cleanup);

describe('Header', () => {
  const fakeFetch = fake.resolves({ json: () => ({ isLoggedIn: false }) });
  global.fetch = fakeFetch;

  it('should render Header', () => {
    const history = createMemoryHistory();
    const user = { user_name: 'sukhi', img_url: 'url' };
    render(
      <Router history={history}>
        <Header data-testid='header-test' user={user} />
      </Router>
    );
    assert.ok(screen.getByText(/Knowledge House/));
    assert.ok(screen.getByText(/Login/));
  });
});
