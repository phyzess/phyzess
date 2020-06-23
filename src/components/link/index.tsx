import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Location } from '@reach/router'
import { getCSS } from './styled'
import { ILinkProps } from './types'

const Link: React.FC<ILinkProps> = ({
  as = 'route',
  to = '',
  children,
  colorType = 'default',
  neumorphism,
  active,
  ...props
}) => {
  const css = getCSS(colorType, !!neumorphism, !!active)

  if (as === 'a') {
    return (
      <a href={to} className='phyzess-link' css={css} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Location>
      {({ location }) => (
        <GatsbyLink
          to={to}
          state={{ prevPath: `${location.pathname}${location.search}` }}
          className='phyzess-link'
          css={css}
          {...props}
        >
          {children}
        </GatsbyLink>
      )}
    </Location>
  )
}

export default Link
