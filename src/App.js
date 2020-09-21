import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePost from './pages/SinglePost';
import Home from './pages/Home';
import Login from './pages/Login';
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
    fetch('/user')
      .then(async res => {
        const { name, avatar_url, bio } = await res.json();
        return setUser({ name, avatar_url, bio, isLoggedIn: true });
      })
      .catch(() => setUser({ isLoggedIn: false }));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={props =>
            user.isLoggedIn ? <Home posts={posts} /> : <Login />
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
