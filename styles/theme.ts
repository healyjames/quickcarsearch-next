import { DefaultTheme, createGlobalStyle } from 'styled-components'

export interface Theme extends DefaultTheme {
    colors: {
        brand: string
        accent: string
        neutrals: {
            darkest: string
            dark: string
            regular: string
            light: string
            lightest: string
        }
        foreground: string
        background: string
        backgroundAlt: string
    }
    font: {
        family: {
            primary: string
            secondary: string
        }
        size: number
    }
    breakpoints: {
        sm: number
        md: number
        lg: number
        xl: number
    }
    core: {
        margin: number
        padding: number
        grid: {
            gap: number
        }
        maxWidth: number
    }
    border: {
        color: string
        radius: number
        width: number
        style: string
    }
}

export const BrandConfig: Theme = {
    colors: {
        brand: '#E8740C',
        accent: '#0C2b3A',
        neutrals: {
            darkest: '#303336',
            dark: '#565C61',
            regular: '#9AA0A6',
            light: '#CCCCCC',
            lightest: '#EBEBEB'
        },
        foreground: '#FFFFFF',
        background: '#131416',
        backgroundAlt: '#26282C'
    },
    font: {
        family: {
            primary: 'Lexend Deca, sans-serif',
            secondary: 'Oswald, sans-serif'
        },
        size: 1.2 //rem
    },
    breakpoints: {
        sm: 475, //px
        md: 676, //px
        lg: 979, //px
        xl: 1200 //px
    },
    core: {
        margin: .6, //rem
        padding: .8, //rem
        grid: {
            gap: 1
        },
        maxWidth: 2000,
    },
    border: {
        color: '#E6EAEE',
        radius: .75, //rem
        width: 3, //px
        style: 'solid'
    }
};

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    html {
        scroll-behavior: smooth;
        font-size: 16px;
        background-color: ${props => props.theme.colors.background};
    }

    body {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6, p, label, button, legend, input, li, td, th, span, div {
        font-family: ${props => props.theme.font.family.primary};
        color: ${props => props.theme.colors.foreground};
    }

    form > fieldset {
        border: none;
        padding: 0;
        margin: 0;
    }

    header {
        padding: ${props => (props.theme.core.padding * 1.2).toFixed(2)}rem;
        margin-bottom: ${props => props.theme.core.margin}rem;
    }

    label {
        margin-bottom: ${props => props.theme.core.padding / 2}rem;
    }

    picture {
        display: flex;
    }

    #__next {
        max-width: ${props => props.theme.core.maxWidth}px;
        min-height: 100vh;
        margin: 0 auto;
    }

    .sr-only {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    .back-btn {
        margin-bottom: ${props => props.theme.core.margin}rem;
        border-bottom: 1px ${props => props.theme.border.style} ${(props) => props.theme.colors.foreground};
    }
`;