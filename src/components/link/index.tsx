import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css, SerializedStyles } from '@emotion/core'
import {
  $colorTextDefault,
  $colorTextPrimary,
  $colorTextSecondary,
  $colorTextActive,
  $innerShadowActive,
  $transitionDuration,
  $transitionTimingFunction,
} from '@/root/theme'

type Color = 'default' | 'primary' | 'secondary'

interface ILinkProps {
  to: string
  as?: 'a' | 'route'
  neumorphism?: boolean
  colorType?: Color
  active?: boolean
  style?: React.CSSProperties
}

type TGetCSSStyle = (colorType: Color, neumorphism: boolean, active: boolean) => SerializedStyles

const baseStyle = css`
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

const getActiveStyle = (neumorphism: boolean) => (neumorphism ? activeNeumorphism : activeText)

const getColor = (colorType: Color, neumorphism: boolean) => {
  switch (colorType) {
    case 'primary':
      return `color:${$colorTextDefault};`
    case 'secondary':
      return `color:${$colorTextSecondary};`
    default:
      return neumorphism ? `color:${$colorTextDefault};` : `color:${$colorTextPrimary};`
  }
}

const switchTypeStyle = (neumorphism: boolean) => (neumorphism ? neumorphismStyle : textStyle)

const getCSSStyle: TGetCSSStyle = (colorType, neumorphism, active) => css`
  ${baseStyle}
  ${getColor(colorType, neumorphism)}
  ${switchTypeStyle(neumorphism)}
  ${active && getActiveStyle(neumorphism)}
`

const Link: React.FC<ILinkProps> = ({
  as = 'route',
  to = '',
  children,
  colorType = 'default',
  neumorphism,
  active,
  ...props
}) => {
  if (as === 'a') {
    return (
      <a href={to} className='phyzess-link' css={getCSSStyle(colorType, !!neumorphism, !!active)} {...props}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={to} className='phyzess-link' css={getCSSStyle(colorType, !!neumorphism, !!active)} {...props}>
      {children}
    </GatsbyLink>
  )
}

export default Link
