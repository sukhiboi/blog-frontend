import React from 'react';
import { useProfile } from './../hooks/useProfile';
import Loader from './../components/Loader';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import PostList from '../components/PostList';
import './../styles/profile.css';
import { useTitle } from '../hooks/useTitle';

const Profile = props => {
  useTitle('Profile');
  const { user, posts, isLoaded } = useProfile();

  if (!isLoaded) return <Loader />;
  return (
    <div>
      <div className='user-profile'>
        <div className='avatar'>
          <img src={user.img_url} alt={user.user_name} />
        </div>
        <div className='user-details'>
          <div className='user-name'>{user.user_name}</div>
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
