import React from 'react';
import { Container, Title, SubContainer, Text } from './info.style'
const UserInfo = ({name, username, email, address, phone, company}) => {
    return (
        <Container>
            <SubContainer>
                <Title>{name} ({username})</Title>  
            </SubContainer>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            <Text>City: {address}</Text>
            <Text>Company: {company}</Text>
            <Title sub>{name}'s Posts:-</Title>
        </Container>
    )
}

export default UserInfo