import styled from "styled-components";

export const Title = styled.h1`
    font-size: ${props => props.large ? props.theme.fontSize.large : props.theme.fontSize.fontOne};
    color: ${props => props.theme.color.Headings};
    text-transform: capitalize;
    line-height: 1.2;
    font-family: ${props => props.theme.fontFamily.josefin};
    transition: all 0.2s;
    margin-bottom: 1px;
`