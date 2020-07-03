import React from 'react'
import { Container } from '@material-ui/core'
import bemFactor from '@utils/bemFactor'

import { LayoutWrapper, Main } from './styled'
import Header from './Header'
import Footer from './Footer'

const cls = bemFactor('layout')

interface ILayoutProps {
  children: NonNullable<React.ReactNode>
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <LayoutWrapper className={cls('wrapper')}>
    <Header />
    <Main className={cls('main')}>
      <Container maxWidth='md'>{children}</Container>
      <Footer />
    </Main>
  </LayoutWrapper>
)

export default Layout
