import styled from "styled-components";

export const NewsContainer = styled.main`
    background: ${(props) => props.theme.colors.mainBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: ${(props) => props.theme.colors.mainBorder};
    border-right: ${(props) => props.theme.colors.mainBorder};
    width: 900px;
    
    min-height: calc(100vh - 100px);
    margin-top: 75px;
    margin-bottom: 25px;
`;

export const GamesContainer = styled(NewsContainer)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    .searchBarContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        width: 100%;
    }
`;


export const DetailsContainer = styled(NewsContainer)`
    padding: 20px;

`;



