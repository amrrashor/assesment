import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
`
export const Title = styled.h5`
    color:${props => props.theme.color.Headings} ;
    margin-right: 5px;
`

export const Email = styled.p`
    color:${props => props.theme.color.BodyText};
    font-size: ${props => props.theme.fontSize.fontThree};
    font-weight: 500;
`