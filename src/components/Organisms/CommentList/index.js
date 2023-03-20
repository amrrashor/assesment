import React, { useState,useEffect } from 'react'
import { SingleComment, CommentBox } from '@molecules';
import { Comments, Container, ListContainer } from './list.style';


const CommentList = ({items}) => {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    setComments([...items]);
  }, [items]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  return (
    <ListContainer>
      <Comments>Comments:-</Comments>
      <Container>
        {comments?.map((comment) => (
          <SingleComment
            name={comment?.name}
            body={comment?.body}
            id={comment?.id}
            email={comment?.email}
            key={comment?.id}
          />
        ))}
      </Container>
      <CommentBox onAddComment={addComment} />
    </ListContainer>
  )
}

export default CommentList