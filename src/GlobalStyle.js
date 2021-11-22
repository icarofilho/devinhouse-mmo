import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #0d2f81;
        --color-secondary: #ffe7aa;
    }
    body{
        background: ${(props) => props.theme.colors.bodyBackground};
        color: ${(props) => props.theme.colors.text};
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
}

code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
