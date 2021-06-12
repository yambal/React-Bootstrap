import { defaultTheme, ThemeProvider } from '@xstyled/styled-components'
import { bootstrapDefaultColors } from './bootstrapDefaultColors'
import { colorNames } from './colorNames'


/**
 * https://github.com/gregberge/xstyled/blob/main/packages/system/src/defaultTheme.ts
 */

export const bootstrapTheme = {
  colors: Object.assign(defaultTheme.colors, bootstrapDefaultColors, colorNames),

  fonts: {
    sans: 'system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Segoe UI", "Meiryo", sans-serif',
    system: 'system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Segoe UI", "Meiryo", sans-serif'
  },

  fontSizes: {
    default: '1rem',
    h6: '1em',
    lg: '1.125rem',
    xl: '1.25rem',
    h5: '1.25rem',
    h4: 'calc(1.275rem + .3vw)',
    h3: 'calc(1.3rem + .6vw)',
    h2: 'calc(1.325rem + .9vw)',
    h1: 'calc(1.375rem + 1.5vw)',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    display6: '2.5rem',
    '5xl': '3rem',
    display5: '3rem',
    display4: '3.5rem',
    '6xl': '3.75rem',
    display3: '4rem',
    '7xl': '4.5rem',
    display2: '4.5rem',
    display1: '5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },

  lineHeights: {
    none: 1,
    headings: '1.2rem',
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    xs: '1rem',
    sm: '1.25rem',
    default: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': 1,
    '6xl': 1,
    '7xl': 1,
    '8xl': 1,
    '9xl': 1,
  },

  screens: {
    _: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
}

export type BootstrapTheme = typeof bootstrapTheme
/*
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {
    demo?: unknown
  }
}
*/