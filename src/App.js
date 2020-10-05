import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useUser } from './hooks/useUser';
import { usePostsStore } from './hooks/usePostsStore';
import Loader from './components/Loader/Loader';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import EditPost from './pages/EditPost';

const SiteLayout = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding-bottom: 1rem;
`;

const App = props => {
  const postsStore = usePostsStore();
  const user = useUser();
  if (!user.loaded) return <Loader />;
  return (
    <SiteLayout>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            children={<Home user={user} postsStore={postsStore} />}
          />
          <Route path='/post/:id' children={<SinglePost user={user} />} />
          <Route exact path='/new-post' children={<NewPost user={user} />} />
          <Route exact path='/edit-post/:id' children={<EditPost user={user} />} />
          <Route path='/profile/:username' children={<Profile user={user} />} />
          <Route exact path='/login' children={<Login />} />
          <Route children={<p>404</p>} />
        </Switch>
      </BrowserRouter>
    </SiteLayout>
  );
};

export default App;
