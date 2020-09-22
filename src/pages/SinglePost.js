import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Post from './../components/Post';

const SinglePost = props => {
  const [post, setPost] = useState({ isLoaded: false });
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/post/${id}`)
      .then(res => res.json())
      .then(post => setPost({ ...post, isLoaded: true }))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <Redirect to='/login' />;
  if (!post.isLoaded) return <p>Loading...</p>;
  return <Post className='static-post' post={post} />;
};

export default SinglePost;
