import { css } from '@emotion/core'
import { ITheme } from '@root/theme'
import { Color, TGetCSS } from './types'

const baseCSS = (theme: ITheme) => css`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-top: 0;
  padding-right: 7px;
  padding-bottom: 0;
  padding-left: 7px;
  text-decoration: none;
  transition: all ${theme.transitionDuration} ${theme.transitionTimingFunction};

  & > * {
    flex: 1;
  }
`

export const activeText = (theme: ITheme) => css`
  color: ${theme.neuTextActive};
`

export const activeNeumorphism = (theme: ITheme) => css`
  color: ${theme.neuTextPrimary};
  box-shadow: ${theme.neuInnerShadow};
`

const textStyle = (theme: ITheme) => css`
  &:hover {
    ${activeText(theme)};
  }
`

const neumorphismStyle = (theme: ITheme) => css`
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
  font-weight: 600;
  &:hover {
    ${activeNeumorphism(theme)}
  }
`

const getColor = (colorType: Color, neumorphism: boolean, theme: ITheme) => {
  switch (colorType) {
    case 'primary':
      return css`
        color: ${theme.neuTextDefault};
      `
    case 'secondary':
      return css`
        color: ${theme.neuTextSecondary};
      `
    default:
      return neumorphism
        ? css`
            color: ${theme.neuTextDefault};
          `
        : css`
            color: ${theme.neuTextPrimary};
          `
  }
}

const getStyleWithType = (neumorphism: boolean, theme: ITheme) =>
  neumorphism ? neumorphismStyle(theme) : textStyle(theme)

const getActiveStyle = (neumorphism: boolean, active: boolean, theme: ITheme) =>
  active ? (neumorphism ? activeNeumorphism(theme) : activeText(theme)) : css``

export const getCSS: TGetCSS = (colorType, neumorphism, active, theme) => [
  baseCSS(theme),
  getColor(colorType, neumorphism, theme),
  getStyleWithType(neumorphism, theme),
  getActiveStyle(neumorphism, active, theme),
]
