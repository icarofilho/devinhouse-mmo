import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */

    height: 75px;
    width: 100vw;
    background: ${(props) => props.theme.colors.header};
    border-bottom: ${(props) => props.theme.colors.borderBottom};
    color: #fff;
    position: fixed;
    top: 0;
    gap: 20px;

    div {
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .title {
        font-family: "Londrina Solid", cursive;
        font-size: 30px;
    }
    .space {
        width: 300px;
        
    }

    button {
        height: 30px;
        cursor: pointer;
    }
`;

export const Button = styled(Link)`
    height: 50px;
    width: 100px;
    border: 1px solid #fff;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    

`