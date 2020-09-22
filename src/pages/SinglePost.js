import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../components/Header';
import Post from './../components/Post';

const SinglePost = props => {
  const [post, setPost] = useState({ isLoaded: false });

  const { id } = useParams();

  useEffect(() => {
    fetch(`/post/${id}`)
      .then(res => res.json())
      .then(post => setPost({ ...post, isLoaded: true }));
  }, [id]);

  if (!post.isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <Header username={props.user.name} />
      <div>
        <Post className='post static-post' post={post} />
      </div>
    </div>
  );
};

export default SinglePost;
