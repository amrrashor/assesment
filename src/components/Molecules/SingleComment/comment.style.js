import styled from "styled-components";


export const Container = styled.div`
    box-shadow: ${props => props.theme.boxShadow.boxShadowOne};
    padding: 12px;
    margin: 8px 0;
    border-radius: 5px;
`

export const Title = styled.h5`
    font-weight: 900;
`

export const CommentBody = styled.p`
    font-size: ${props => props.theme.fontSize.fontThree};
`

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: -10px;
`

export const Email = styled.p`
    color:${props => props.theme.color.BodyText};
    font-size: ${props => props.theme.fontSize.fontThree};
    margin-left: 5px;
`