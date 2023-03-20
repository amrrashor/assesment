import React from 'react';
import { Container } from './postDetails.style';
import { PostTitle, PostSubTitle, PostBody, AuthorLink, AuthorInfo} from '@atoms';

const PostDetailsBody = ({body, title, subtitle, duration, userId, name, email,CompanyName, PhoneNumber}) => {
  return (

    <Container>
      <PostTitle large title={title} />
      <AuthorInfo  CompanyName={CompanyName}/>
      <AuthorInfo  PhoneNumber={PhoneNumber}/>
      <PostSubTitle subtitle={subtitle} duration={duration} />
      {/* I rendered PostBody many times to make up some space :) */}
      <PostBody details first body={body} /> 
      <PostBody details body={body} />
      <PostBody details body={body} />
      <PostBody details last body={body} />
      <AuthorLink userId={userId} name={name} email={email} />
    </Container>
  )
}

export default PostDetailsBody