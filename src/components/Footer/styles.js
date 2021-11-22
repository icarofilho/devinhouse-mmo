import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 25px;
    width: 100vw;
    background: ${(props) => props.theme.colors.footer};
    border-top: ${(props) => props.theme.colors.borderTop};
    color: #fff;
    position: fixed;
    bottom: 0;
`;
