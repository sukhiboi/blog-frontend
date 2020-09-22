import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/blog.css';

const App = props => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      <PrivateRoute path='/post/:id' component={SinglePost} />
      <PrivateRoute exact path='/new-post' component={NewPost} />
      <Route exact path='/login' children={<Login />} />
    </Switch>
  </BrowserRouter>
);

export default App;
