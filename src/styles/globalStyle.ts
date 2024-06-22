import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background-color: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
    }
    h1, h2, p, ul, li, figure {
        margin: 0;
        padding: 0;
    }
`
