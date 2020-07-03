import React from 'react'
import styled from '@emotion/styled'
import bemFactor from '@utils/bemFactor'
import Link from '@components/link'
import { FooterWrapper } from './styled'

const cls = bemFactor('layout')

const GatsbyLink = styled(Link)`
  margin-left: 5px;
`

const Footer: React.FC<any> = () => (
  <FooterWrapper className={cls('footer')}>
    <span>
      © {new Date().getFullYear()}, Built with
      {` `}
    </span>
    <GatsbyLink as='a' to='https://www.gatsbyjs.org'>
      Gatsby
    </GatsbyLink>
  </FooterWrapper>
)

export default Footer
