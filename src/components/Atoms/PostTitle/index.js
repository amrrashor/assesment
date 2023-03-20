import React from 'react';
import { Title } from './postTitle.style';

const PostTitle = ({ title, large }) => {
  return (
    <Title large={large}>{title}</Title>
  );
};
export default PostTitle;