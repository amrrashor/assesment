import React from 'react'
import { PostTitle, PostSubTitle, PostBody } from '../../Atoms/index'; //I didn't use Alias here becuase it throws errors while testing :(
import { Link } from 'react-router-dom';
import { Container } from './singleCard.style';

const SinglePostCard = ({title, subtitle, body, duration, postId}) => {
  return (
    <Link to={`/postdetails/${postId}`}>
      <Container>  
        <PostTitle large={false} title={title} />
        <PostSubTitle subtitle={subtitle} duration={duration} />
        <PostBody body={body} />
      </Container>
    </Link>
  )
}

export default SinglePostCard