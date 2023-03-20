import React from 'react';
import { Paragraph, Container } from './postBody.style';

const PostBody = ({body, details, first, last}) => {
  return (
    <Container first={first} last={last} details={details}>
      <Paragraph>{body}</Paragraph>
    </Container>
    
  )
}
export default PostBody