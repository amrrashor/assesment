import React from 'react'
import { Container, InputContainer, Input } from './TextField.style';
import { BsSearch } from 'react-icons/bs';

const TextField = ({ onChange, placeholder, search, comment, value }) => {
    return (
        <Container>
            <InputContainer>
                <Input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder={placeholder}
                />
                <BsSearch />
            </InputContainer>
        </Container>
    )
}

export default TextField