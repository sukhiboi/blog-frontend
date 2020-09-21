import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePost from './pages/SinglePost';
import Home from './pages/Home';
import './styles/blog.css';

const posts = [
  {
    id: 1,
    title: 'A brand new Post',
    publishedDate: '2020-09-11T15:57:14.580Z',
    content: 'Hello this is some dummy content.',
  },
  {
    id: 2,
    title: 'A second brand new Post',
    publishedDate: '2020-03-11T15:57:14.580Z',
    content: 'Hello this is again some dummy content.',
  },
];

const App = props => {
  const [user, setUser] = useState({ isLoggedIn: false });

  useEffect(() => {
    fetch('/api/user').then(async res => {
      if (!res.ok) setUser({ isLoggedIn: false });
      const user = await res.json();
      return setUser({ ...user, isLoggedIn: true });
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={props =>
            user.isLoggedIn ? (
              <Home posts={posts} />
            ) : (
              <a href={process.env.REACT_APP_LOGIN_REDIRECT}>login</a>
            )
          }
        />
        <Route
          path='/post/:id'
          render={({ match }) => {
            const post = posts.find(({ id }) => id === +match.params.id);
            return <SinglePost post={post} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
