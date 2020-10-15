import React from 'react';
import { useProfile } from './../hooks/useProfile';
import Loader from './../components/Loader/Loader';
import WithHeader from './../components/WithHeader';
import PostList from '../components/PostList';
import styled from 'styled-components';
import { useTitle } from '../hooks/useTitle';

const ProfileLayout = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const ProfileDetails = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #cfcfcf;
`;

const Avatar = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
`;

const UserDetails = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & div {
    padding-bottom: 10px;
  }
`;

const Username = styled.div`
  font-size: 2rem;
  font-weight: 900;
  text-transform: capitalize;
`;

const Bio = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Profile = props => {
  useTitle('Profile');
  const { user, posts, isLoaded } = useProfile();

  if (!isLoaded) return <Loader />;
  return (
    <ProfileLayout>
      <ProfileDetails>
        <Avatar src={user.img_url} alt={user.user_name} />
        <UserDetails>
          <Username children={user.user_name} />
          <Bio children={user.bio} />
          <div>
            Published {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </div>
        </UserDetails>
      </ProfileDetails>
      <PostList posts={posts} />
    </ProfileLayout>
  );
};

export default WithHeader(Profile);
