import React, { useState, useEffect } from 'react';
import { CardList, MainLayout, UserInfo } from '@organisms';
import { Loader } from "@atoms";
import { USERS } from '@apis';
import { useParams } from 'react-router-dom';

const User = () => {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();

  //fetch user's posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${USERS}/${id}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [id]);

  //fetch user's info
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`${USERS}/${id}`);
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        setError('Error fetching user information');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [id]);
  
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MainLayout>
      <UserInfo
        name={userInfo?.name}
        username={userInfo?.username}
        email={userInfo?.email}
        phone={userInfo?.phone}
        company={userInfo?.company?.name}
        address={userInfo?.address?.city}
      />
      <CardList user post={posts} />
    </MainLayout>
  );
};

export default User;