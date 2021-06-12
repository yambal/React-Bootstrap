import { bootstrapDefaultColors } from "./bootstrapDefaultColors";
import { readableColor, transparentize } from 'polished'
import { css, Theme } from "@xstyled/styled-components";

export const colorNames = {
  "primary": bootstrapDefaultColors.bsBlue,
  "secondary": bootstrapDefaultColors.bsGray,
  "success": bootstrapDefaultColors.bsSuccess,
  "info": bootstrapDefaultColors.bsInfo,
  "warning": bootstrapDefaultColors.bsYellow,
  "danger": bootstrapDefaultColors.bsDanger,
  "light": bootstrapDefaultColors.bsLight,
  "dark": bootstrapDefaultColors.bsDark,
}

export type ColorNameVariants = Theme & {
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
 * 
 * @param bg 
 * @param theme 
 * @returns 
 */
export const bsReadableColor = (bg: string, theme:Theme):string => {
  return readableColor(bg, theme.colors.white, theme.colors.dark)
}

export const boxVariant = (props:ColorNameVariants) => {
  const colorName = props.primary ? 'primary'
    : props.secondary ? 'secondary'
    : null

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