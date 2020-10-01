import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useUser } from './hooks/useUser';
import { usePostsStore } from './hooks/usePostsStore';
import Loader from './components/Loader';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './styles/blog.css';

const SiteLayout = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding-bottom: 1rem;
`;

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
    <SiteLayout>
      <SiteContext.Provider value={contextValue}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' children={<Home user={user} />} />
            <Route path='/post/:id' children={<SinglePost user={user} />} />
            <Route exact path='/new-post' children={<NewPost user={user} />} />
            <Route
              path='/profile/:username'
              children={<Profile user={user} />}
            />
            <Route exact path='/login' children={<Login />} />
            <Route children={<p>404</p>} />
          </Switch>
        </BrowserRouter>
      </SiteContext.Provider>
    </SiteLayout>
  );
};

export default App;
