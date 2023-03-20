import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.details ? 'block': 'flex'};
    justify-content: center;
    align-items: center;
    margin-top:${props => props.first ? '40px' : 0};
    margin-bottom:${props => props.last ? '40px' : 0};
`
export const Paragraph = styled.p`
`