import styled from "styled-components";

export const Container = styled.section`
    img {
        border-radius: 10px;
        width: 100%;
    }
`

export const tumbArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 5px;

    img {
        border-radius: 5px;
        height: 100px;
        width: 150px;
        :hover {
            cursor: pointer;
            box-shadow: ${(props) => props.theme.colors.boxShadowHover};
            border: ${(props) => props.theme.colors.border};
        }
    }
`;

