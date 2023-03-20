import styled from "styled-components";

export const Container = styled.div``

export const Title = styled.h1`
    font-size: ${props => props.sub ? props.theme.fontSize.fontOne : 'initail'};
    margin-top: ${props => props.sub ? '100px' : 0};
    margin-bottom: ${props => props.sub ? '50px' : 0};
    
`

export const SubContainer = styled.div`
    display: flex;
    align-items:flex-end;
`

export const Text = styled.p`
    color:${props => props.theme.color.BodyText};
    font-size: ${props => props.theme.fontSize.fontThree};
    font-weight: 500;
`