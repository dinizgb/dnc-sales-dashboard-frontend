import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
    }
`
