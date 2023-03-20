import React from 'react'
import { Container, Info } from './info.style'

const AuthorInfo = ({PhoneNumber, CompanyName}) => {
    return (
        <Container>
            {PhoneNumber && <Info>Phone: {PhoneNumber}</Info>}
            {CompanyName && <Info>Company: {CompanyName}</Info>}
        </Container>
    )
}

export default AuthorInfo