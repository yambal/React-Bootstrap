import { defaultTheme } from '@xstyled/styled-components'
import { bootstrapDefaultColors } from './theme/bootstrapDefaultColors'
import { bootstrapColorNames } from './theme/bootstrapColorNames'


/**
 * https://github.com/gregberge/xstyled/blob/main/packages/system/src/defaultTheme.ts
 */

export const bootstrapTheme = {
  ...defaultTheme,
  colors: Object.assign(defaultTheme.colors, bootstrapDefaultColors, bootstrapColorNames),

  fonts: {
    sans: 'system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Segoe UI", "Meiryo", sans-serif',
    system: 'system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Segoe UI", "Meiryo", sans-serif'
  },

  fontSizes: Object.assign(defaultTheme.fontSizes, {
    h6: '1em',
    h5: '1.25rem',
    h4: 'calc(1.275rem + .3vw)', 
    h3: 'calc(1.3rem + .6vw)',
    h2: 'calc(1.325rem + .9vw)',
    h1: 'calc(1.375rem + 1.5vw)',
    display6: '2.5rem',
    display5: '3rem',
    display4: '3.5rem',
    display3: '4rem',
    display2: '4.5rem',
    display1: '5rem'
  }),

  lineHeights: Object.assign(defaultTheme.lineHeights, {
    headings: '1.2rem',
    h6: '1.2rem',
    h5: '1.25rem',
    h4: 'calc((1.275rem + .3vw) * 1.2)',
    h3: 'calc((1.275rem + .6vw) * 1.2)',
    h2: 'calc((1.275rem + .9vw) * 1.2)',
    h1: 'calc((1.275rem + 1.5vw) * 1.2)'
  }),

  screens: Object.assign(defaultTheme.screens, {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }),
}

export type BootstrapTheme = typeof bootstrapTheme
/*
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {
    demo?: unknown
  }
}
*/