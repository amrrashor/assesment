import React, { useState, useEffect } from 'react';
import { MainLayout, PostDetailsBody, CommentList } from '@organisms';
import { Loader } from '@atoms';
import { POSTS, USERS, COMMENTS } from '@apis';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const [postDetail, setPostDetail] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  //to fetch post
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${POSTS}/${id}`);
        const data = await response.json();
        setPostDetail(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  //to fetch user name
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null);
      if (postDetail !== null) {
        try {
          const response = await fetch(`${USERS}/${postDetail.userId}`);
          const data = await response.json();
          setUser(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUser();
  }, [postDetail]);

  //to fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${COMMENTS}/posts/${id}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MainLayout>
      <PostDetailsBody
        title={postDetail?.title}
        subtitle={postDetail?.title}
        duration={postDetail?.id}
        body={postDetail?.body}
        userId={user?.id}
        name={user?.name}
        email={user?.email}
        PhoneNumber={user?.phone}
        CompanyName={user?.company?.name}
      />
      <CommentList items={comments} />
    </MainLayout>
  );
};

export default PostDetails;