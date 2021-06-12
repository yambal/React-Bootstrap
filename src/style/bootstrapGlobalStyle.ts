import { createGlobalStyle, css } from '@xstyled/styled-components'
import { normalize } from 'polished'

export const bootstrapGlobalStyle = () => css`
  ${normalize()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }
  
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.sans}${props => props.theme.fonts.system && `,${props.theme.fonts.system}`};
    font-size: ${props => props.theme.fontSizes.default};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.normal};
    color: ${props => props.theme.colors.bsDark};
    background-color: ${props => props.theme.colors.white};
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  hr {
    height: 1px;
    margin: ${props => props.theme.space['4']} 0;
    color: ${props => props.theme.colors.inherit};
    background-color: ${props => props.theme.colors.dark};
    border: 0;
    opacity: .25;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${props => props.theme.space['2']};
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: ${props => props.theme.lineHeights.headings};
    color: ${props => props.theme.colors.dark};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.h1};
    line-height: ${props => props.theme.lineHeights.h1};
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.h2};
    line-height: ${props => props.theme.lineHeights.h2};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.h3};
    line-height: ${props => props.theme.lineHeights.h3};
  }

  h4 {
    font-size: ${props => props.theme.fontSizes.h4};
    line-height: ${props => props.theme.lineHeights.h4};
  }

  h5 {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: ${props => props.theme.lineHeights.h5};
  }

  h6 {
    font-size: ${props => props.theme.fontSizes.default};
    line-height: ${props => props.theme.lineHeights.h6};
  }

  p {
    margin-top: 0;
  }

  a {
    color: ${props => props.theme.colors.bsBlue};
    text-decoration: underline;
    &:hover {
      color: #0a58ca;
    }
  }
`