import { readableColor, transparentize } from 'polished'
import { css, Theme } from "@xstyled/styled-components"

export type BootstrapBoxColorVariants = Theme & {
  primary?: boolean
  secondary?: boolean
  success?: boolean
  info?: boolean
  warning?: boolean
  danger?: boolean
  light?: boolean
  dark?: boolean
}

/**
 * テーマ色を背景色に持つ要素へ
 * 
 * const NavBarBox = styled.navBox<BootstrapBoxColorVariants>`
 *   ${props => boxVariant(props)}
 * `
 * 
 * @param props 
 * @returns 
 */
export const boxVariant = (props: BootstrapBoxColorVariants) => {
  const colorName: string = props.primary ? 'primary'
    : props.secondary ? 'secondary'
    : props.success ? 'success'
    : props.info ? 'info'
    : props.warning ? 'warning'
    : props.danger ? 'danger'
    : props.light ? 'light'
    : props.dark ? 'dark'
    : undefined

    if (colorName) {
    return css`
      background-color: ${props.theme.colors[colorName]};
      a {
        color: ${transparentize(0.2, bsReadableColor(props.theme.colors[colorName], props.theme))};
        &:hover {
          color: ${bsReadableColor(props.theme.colors[colorName], props.theme)};
        }
      }
    `
  }
}

/**
 * 
 * @param bg 
 * @param theme 
 * @returns 
 */
 export const bsReadableColor = (bg: string, theme:Theme):string => {
  return readableColor(bg, theme.colors.white, theme.colors.dark)
}