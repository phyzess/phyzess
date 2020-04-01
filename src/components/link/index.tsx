import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const baseStyle = css`
  margin: 0 8px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 109, 117, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const StyledA = styled.a`
  ${baseStyle}
`

const StyledGatsbyLink = styled(GatsbyLink)`
  ${baseStyle}
`

interface ILinkProps {
  to: string
  as?: 'a' | 'route'
  [key: string]: any
}
const Link: React.FC<ILinkProps> = ({
  as = 'route',
  to = '',
  children,
  ...props
}) =>
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
