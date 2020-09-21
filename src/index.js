import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

const posts = [
  {
    title: 'A brand new Post',
    publishedDate: '2020-09-11T15:57:14.580Z',
    content: 'Hello this is some dummy content.',
  },
  {
    title: 'A second brand new Post',
    publishedDate: '2020-03-11T15:57:14.580Z',
    content: 'Hello this is again some dummy content.',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Home posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);
