import styled from "styled-components";

export const Container = styled.div`
    margin: 0 100px;
    padding: 50px 0;

    @media (max-width: 768px) {
    margin: 0 50px;
}

    @media (max-width: 480px) {
    margin: 0 30px;
}
`
export const SubContainer = styled.div`
display: flex;
align-items:center;
justify-content: center;
`
export const Image = styled.img`
    max-width: 300px;
    max-height: 100px;
    margin-bottom: 50px;
`