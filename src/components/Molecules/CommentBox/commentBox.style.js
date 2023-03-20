import styled from "styled-components";


export const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:992px){
        width: 100%;
    }

    

    input, textarea {
        padding: 20px;
        border-radius: 10px;
        border: 1px solid ${props => props.theme.color.Subheadings};
        margin-bottom: 10px;
    }

    button {
        border-radius: 5px;
        border: 1px solid ${props => props.theme.color.Subheadings};
        padding: 10px;
        color: ${props => props.theme.color.Headings};
        background-color: ${props => props.theme.color.white};
        width: 100%;
    }

`