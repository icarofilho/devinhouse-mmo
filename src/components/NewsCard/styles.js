import styled from "styled-components";

export const Container = styled.article`
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    justify-content: left;
    align-items: center;
    width: 800px;
    padding: 10px;
    margin: 5px;
    gap: 10px;

    :hover {
        color: ${(props) => props.theme.colors.textHover};
        box-shadow: ${(props) => props.theme.colors.boxShadowHover};
    }
`;

export const CardImage = styled.img`
    width: 218px;
    height: 151px;
    border-radius: 10px 0 0 10px;
`;

export const CardResume = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;

    button {
        width: 100px;
        height: 20px;
        bottom: 0px;

        a {
            text-decoration: none;
        }

        :hover {
            cursor: pointer;
        }
    }
`;
