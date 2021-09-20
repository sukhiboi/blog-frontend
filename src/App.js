import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {useUser} from './hooks/useUser';
import {usePostsStore} from './hooks/usePostsStore';
import Loader from './components/Loader/Loader';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditPost from './pages/EditPost';
import Signup from './pages/Signup';
import Login from "./pages/Login";

const SiteLayout = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding-bottom: 1rem;
`;

const history = createBrowserHistory();

const App = () => {
    const postsStore = usePostsStore();
    const user = useUser();
    if (!user.loaded) return <Loader/>;
    return (
        <SiteLayout>
            <BrowserRouter history={history}>
                <Switch>
                    <Route
                        exact
                        path='/'
                        children={<Home user={user} postsStore={postsStore}/>}
                    />
                    <Route path='/profile/:username' children={<Profile user={user}/>}/>
                    <Route path='/post/:id' children={<SinglePost user={user}/>}/>
                    <Route exact path='/new-post' children={<NewPost user={user}/>}/>
                    <Route path='/edit-post/:id' children={<EditPost user={user}/>}/>
                    <Route path='/signup' children={<Signup />}/>
                    <Route path='/login' children={<Login user={user}/>} />
                    <Route children={<p>404</p>}/>
                </Switch>
            </BrowserRouter>
        </SiteLayout>
    );
};

export default App;
