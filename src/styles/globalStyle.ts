import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { pxToRem } from '@/utils'

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

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }

    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }

    .skeleton-loading {
        animation: skeletonAnimation 2s infinite alternate;
    }

    @keyframes skeletonAnimation {
        from {
        background-color: ${(props) => props.theme.appSkeletonFrom};
        }
        to {
        background-color: ${(props) => props.theme.appSkeletonTo};
        }
    }

    .skeleton-loading-mh-1 {
        min-height: ${pxToRem(175)};
    }

    .skeleton-loading-mh-2 {
        min-height: ${pxToRem(400)};
    }
`
