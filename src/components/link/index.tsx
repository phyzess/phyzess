import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  $colorTextPrimary,
  $colorTextActive,
  $innerShadowActive,
  $transitionDuration,
  $transitionTimingFunction,
} from '@theme/theme'

interface INeumorphism {
  neumorphism?: boolean
}
interface ILinkProps extends INeumorphism {
  to: string
  as?: 'a' | 'route'
  [key: string]: any
}

const baseStyle = css`
  padding-top: 0;
  padding-right: 7px;
  padding-bottom: 0;
  padding-left: 7px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: all ${$transitionDuration} ${$transitionTimingFunction};
`

const normalStyle = css`
  color: ${$colorTextPrimary};
  &:hover {
    color: ${$colorTextActive};
  }
`

const neumorphismStyle = css`
  padding-top: 2px;
  padding-bottom: 2px;
  display: inline-block;
  border-radius: 5px;
  font-weight: 600;
  &:hover {
    color: ${$colorTextPrimary};
    box-shadow: ${$innerShadowActive};
  }
`

const StyledA = styled.a<INeumorphism>`
  ${baseStyle}
  ${({ neumorphism }) => (neumorphism ? neumorphismStyle : normalStyle)}
`

const StyledGatsbyLink = styled(GatsbyLink)<INeumorphism>`
  ${baseStyle}
  ${({ neumorphism }) => (neumorphism ? neumorphismStyle : normalStyle)}
`

const Link: React.FC<ILinkProps> = ({ as = 'route', to = '', children, ...props }) =>
  as === 'a' ? (
    <StyledA href={to} className='phyzess-link' {...props}>
      {children}
    </StyledA>
  ) : (
    <StyledGatsbyLink to={to} className='phyzess-link' {...props}>
      {children}
    </StyledGatsbyLink>
  )

export default Link
