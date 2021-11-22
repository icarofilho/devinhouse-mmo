import styled from "styled-components";



export const Container = styled.div`
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    margin: 20px 0;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    :hover {
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
            rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
            rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
    svg {
        margin:0;
        padding:0;
        color: #000;
    }
`;

export const SearchBar = styled.input`
    border: none;
    outline: none;
    height: 30px;
    margin-left: 20px;
    width: calc(100% - 110px);
    font-size: 19px;
`

export const SearchButton = styled.button`
    border: none;
    outline: none;
    height: 30px;
    width: 90px;
    border-radius: 0 15px 15px 0;
    :hover {
        cursor: pointer;
        background-color: blue;
    }
    :active{
        background-color: red;
    }
`;