import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './hooks/useUser';
import { usePostsStore } from './hooks/usePostsStore';
import Loader from './components/Loader';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/blog.css';

export const SiteContext = React.createContext();

const App = props => {
  const [posts, setPosts] = usePostsStore();
  const [user, isLoaded, setUser] = useUser();

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
            {user.isLoggedIn ? <Home /> : <Redirect to='/login' />}
          </Route>
          <Route path='/post/:id'>
            {user.isLoggedIn ? <SinglePost /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/new-post'>
            {user.isLoggedIn ? <NewPost /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/login' children={<Login />} />
        </Switch>
      </BrowserRouter>
    </SiteContext.Provider>
  );
};

export default App;
