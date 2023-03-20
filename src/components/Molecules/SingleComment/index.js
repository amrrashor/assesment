import React from 'react';
import { Container, Title, CommentBody,SubContainer, Email } from './comment.style'

const SingleComment = ({name, body, email, id}) => {
    return (
        <Container key={id}>
            <SubContainer>
                <Title>{name}</Title>
                <Email>{email}</Email>
            </SubContainer>
            <CommentBody>{body}</CommentBody>
        </Container>
    )
}

export default SingleComment