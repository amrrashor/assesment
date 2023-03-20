import styled from "styled-components";


export const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 10px auto 50px auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`


export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.color.BodyText};
    padding: 3px 8px;
    border-radius: 5px;
    width:100%;
    height: 30px;
    background-color: #fff;
`
export const Input = styled.input`
    border: none;
    outline: none;
    font-size: ${props => props.theme.fontSize.fontTwo};
    width: 100%;
`