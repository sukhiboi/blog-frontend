import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useUser } from './hooks/useUser';
import { usePostsStore } from './hooks/usePostsStore';
import Loader from './components/Loader/Loader';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditPost from './pages/EditPost';

const SiteLayout = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding-bottom: 1rem;
`;

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = props => {
  const postsStore = usePostsStore();
  const user = useUser();
  if (!user.loaded) return <Loader />;
  return (
    <SiteLayout>
      <BrowserRouter history={history}>
        <Switch>
          <Route
            exact
            path='/'
            children={<Home user={user} postsStore={postsStore} />}
          />
          <Route path='/profile/:username' children={<Profile user={user} />} />
          <Route path='/post/:id' children={<SinglePost user={user} />} />
          <Route exact path='/new-post' children={<NewPost user={user} />} />
          <Route path='/edit-post/:id' children={<EditPost user={user} />} />
          <Route children={<p>404</p>} />
        </Switch>
      </BrowserRouter>
    </SiteLayout>
  );
};

export default App;
