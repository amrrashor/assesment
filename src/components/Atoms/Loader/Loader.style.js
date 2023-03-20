import styled from "styled-components";

export const Spinner = styled.div` 
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .bounce1,
    .bounce2,
    .bounce3 {
        width: 15px;
        height: 15px;
        margin: 0 2px;
        border-radius: 50%;
        background-color: ${props => props.theme.color.Headings};
        animation: spinner-bounce 2s infinite ease-in-out;
    }

    .bounce2 {
        animation-delay: -1s;
    }

    .bounce3 {
        animation-delay: -0.5s;
    }

    @keyframes spinner-bounce {
        0%,
        80%,
        100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }
`



