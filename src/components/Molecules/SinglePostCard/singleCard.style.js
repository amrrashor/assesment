import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.color.white};
    box-shadow:  0 3px 12px -1px rgba(7,10,25,.1), 0 22px 27px -30px rgba(7,10,25,.1);
    padding: 40px;
    max-width: 500px;
`