import styled from "styled-components";

export const Container = styled.div`    
    a{
        text-decoration: none;
        p{
            color:${props => props.theme.color.BodyText};
        }
    }
`