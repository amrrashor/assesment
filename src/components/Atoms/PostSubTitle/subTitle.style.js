import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Paragraph = styled.p`
    color:${props => props.theme.color.Subheadings} ;
    line-height: 1.2;
    margin:0 5px 0 0;
    margin-left: ${props => props.left ? "5px" : 0};
    font-size: ${props=> props.theme.fontSize.fontThree};
`