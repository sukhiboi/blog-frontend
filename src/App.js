import React from 'react';
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

const getSinglePost = props => {
  const post = posts.find(({ id }) => id === +props.match.params.id);
  return <SinglePost post={post} />;
};

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' children={<Login />} />
        <Route exact path='/' children={<Home posts={posts} />} />
        <Route path='/post/:id' render={getSinglePost} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
