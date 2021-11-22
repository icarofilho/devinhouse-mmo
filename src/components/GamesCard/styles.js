import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.article`
    background: ${(props) => props.theme.colors.cardBackground};
    padding: 10px;
    border-radius: 5px;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    :hover {
        box-shadow: ${(props) => props.theme.colors.boxShadowHover};
    }
`;
// 
export const Image = styled.img`
    width: 240px;
`

export const Button = styled(Link)`
    display: flex;
    width: 100px;
    height: 30px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.btnBackground};
    :hover {
        background: ${(props) => props.theme.colors.btnBackgroundHover};
        box-shadow: ${(props) => props.theme.colors.btnBackgroundShadow};
    }
`;