import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
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
    const { getByTestId } = render(
      <Router history={history}>
        <Header data-testid='header-test' user={user} />
      </Router>
    );
    const header = getByTestId('header-test');
    assert.ok(screen.getByText(/Blog/));
    assert.ok(screen.getByText(/New Post/));
    assert.ok(screen.getByText(/Logout/));
    const [avatar] = header.getElementsByTagName('img');
    assert.ok(avatar.parentElement.href.includes('/profile/sukhi'));
  });

  it('should send request to backend when logging out user', () => {
    const history = createMemoryHistory();
    const user = { user_name: 'sukhi', img_url: 'url' };
    render(
      <Router history={history}>
        <Header data-testid='header-test' user={user} />
      </Router>
    );
    const logoutBtn = screen.getByText('Logout');
    fireEvent.click(logoutBtn);
    assert.ok(fakeFetch.calledOnceWithExactly('/api/user/logout'));
  });

  it('should redirect to profile page when click on avatar', () => {
    const history = createMemoryHistory();
    const user = { user_name: 'sukhi', img_url: 'url' };
    const { getByTestId } = render(
      <Router history={history}>
        <Header data-testid='header-test' user={user} />
      </Router>
    );
    const header = getByTestId('header-test');
    const [avatar] = header.getElementsByTagName('img');
    const profileLink = avatar.parentElement;
    fireEvent.click(profileLink);
    assert.strictEqual(history.location.pathname, '/profile/sukhi');
  });
});
