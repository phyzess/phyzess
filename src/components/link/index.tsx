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
} from '@/root/theme'

interface INeumorphism {
  neumorphism?: boolean
  active?: boolean
}
interface ILinkProps extends INeumorphism {
  to: string
  as?: 'a' | 'route'
}

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
  color: ${$colorTextPrimary};
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

const getActiveStyle = (neumorphism?: boolean) => (neumorphism ? activeNeumorphism : activeText)

const StyledA = styled.a<INeumorphism>`
  ${baseStyle}
  ${({ neumorphism }) => (neumorphism ? neumorphismStyle : textStyle)}
  ${({ active, neumorphism }) => active && getActiveStyle(neumorphism)}
`

const StyledGatsbyLink = styled(GatsbyLink)<INeumorphism>`
  ${baseStyle}
  ${({ neumorphism }) => (neumorphism ? neumorphismStyle : textStyle)}
  ${({ active, neumorphism }) => active && getActiveStyle(neumorphism)}
`

const Link: React.FC<ILinkProps> = ({ as = 'route', to = '', children, ...props }) => {
  if (as === 'a') {
    return (
      <StyledA href={to} className='phyzess-link' {...props}>
        {children}
      </StyledA>
    )
  }
  return (
    <StyledGatsbyLink to={to} className='phyzess-link' {...props}>
      {children}
    </StyledGatsbyLink>
  )
}

export default Link
