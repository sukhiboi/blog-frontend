import React from 'react';
import { useProfile } from './../hooks/useProfile';
import Loader from './../components/Loader';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import PostList from '../components/PostList';
import './../styles/profile.css';

const Profile = props => {
  const { user, posts, isLoaded } = useProfile();

  if (!isLoaded) return <Loader />;
  return (
    <div>
      <div className='user-profile'>
        <div className='avatar'>
          <img src={user.imgURL} alt={user.name} />
        </div>
        <div className='user-details'>
          <div className='user-name'>{user.name}</div>
          <div className='user-bio'>{user.bio}</div>
          <div>
            Published {posts.length} {posts.length === 1 ? 'post' : 'posts'}{' '}
          </div>
        </div>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default WithAuth(WithHeader(Profile));