import React from 'react'
import { Link } from 'react-router-dom';
import { Title, Email, Container } from './author.style';

const AuthorLink = ({userId, name, email}) => {
    return (
        <Container>
            <Link to={`/user/${userId}`}>
                <Title>Author: {name}</Title>
            </Link>
            <Email>({email})</Email>
        </Container>
    )
}


export default AuthorLink