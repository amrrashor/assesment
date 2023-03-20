import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto ;

    @media (max-width: 992px) {
    grid-template-columns:auto auto ;
    gap: 20px;
}

    @media (max-width: 768px) {
    grid-template-columns: auto ;
    gap: 20px;
}

@media (max-width: 480px) {
    grid-template-columns: auto;
}
`

export const NoResult = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${props => props.theme.fontSize.fontOne};
    font-weight: 600;
`