import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SinglePost from './pages/SinglePost';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/blog.css';

export const UserContext = React.createContext();

const App = props => {
  const [user, setUser] = useState({ isLoggedIn: false, isLoaded: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/post/:id' component={SinglePost} />
          <Route exact path='/login' children={<Login />} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
