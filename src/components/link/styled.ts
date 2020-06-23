import { css } from '@emotion/core'
import {
  $colorTextDefault,
  $colorTextPrimary,
  $colorTextSecondary,
  $colorTextActive,
  $innerShadowActive,
  $transitionDuration,
  $transitionTimingFunction,
} from '@/root/theme'
import { Color, TGetCSS } from './types'

const baseCSS = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-top: 0;
  padding-right: 7px;
  padding-bottom: 0;
  padding-left: 7px;
  text-decoration: none;
  transition: all ${$transitionDuration} ${$transitionTimingFunction};

  & > * {
    flex: 1;
  }
`

export const activeText = css`
  color: ${$colorTextActive};
`

export const activeNeumorphism = css`
  color: ${$colorTextPrimary};
  box-shadow: ${$innerShadowActive};
`

const textStyle = css`
  &:hover {
    ${activeText};
  }
`

const neumorphismStyle = css`
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
  font-weight: 600;
  &:hover {
    ${activeNeumorphism}
  }
`

const getColor = (colorType: Color, neumorphism: boolean) => {
  switch (colorType) {
    case 'primary':
      return css`
        color: ${$colorTextDefault};
      `
    case 'secondary':
      return css`
        color: ${$colorTextSecondary};
      `
    default:
      return neumorphism
        ? css`
            color: ${$colorTextDefault};
          `
        : css`
            color: ${$colorTextPrimary};
          `
  }
}

const getStyleWithType = (neumorphism: boolean) => (neumorphism ? neumorphismStyle : textStyle)

const getActiveStyle = (neumorphism: boolean, active: boolean) =>
  active ? (neumorphism ? activeNeumorphism : activeText) : css``

export const getCSS: TGetCSS = (colorType, neumorphism, active) => [
  baseCSS,
  getColor(colorType, neumorphism),
  getStyleWithType(neumorphism),
  getActiveStyle(neumorphism, active),
]
