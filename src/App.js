import React, { useState } from 'react';
import { BrowserRouter, Redirect as RD, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/blog.css';
import { useUser } from './hooks/useUser';

export const SiteContext = React.createContext();

const App = props => {
  const [user, isLoaded, setUser] = useUser();
  const [posts, setPosts] = useState([]);

  const contextValue = {
    user: { details: user, setUser },
    postsStore: { posts, setPosts },
  };

  if (!isLoaded) return <Loader />;

  return (
    <SiteContext.Provider value={contextValue}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {user.isLoggedIn ? <Home user={user} /> : <RD to='login' />}
          </Route>
          <Route path='/post/:id'>
            {user.isLoggedIn ? <SinglePost user={user} /> : <RD to='login' />}
          </Route>
          <Route exact path='/new-post'>
            {user.isLoggedIn ? <NewPost user={user} /> : <RD to='login' />}
          </Route>
          <Route exact path='/login' children={<Login />} />
        </Switch>
      </BrowserRouter>
    </SiteContext.Provider>
  );
};

export default App;
