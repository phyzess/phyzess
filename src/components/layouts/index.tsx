import React from 'react'
import { Container } from '@material-ui/core'
import bemFactor from '@utils/bemFactor'

import { LayoutWrapper, Main } from './index.styled'
import Header from './Header'
import Footer from './Footer'

const cls = bemFactor('layout')

const Layout: React.FC<{}> = ({ children }) => (
  <LayoutWrapper className={cls('wrapper')}>
    <Header />
    <Main className={cls('main')}>
      <Container maxWidth='md'>{children}</Container>
      <Footer />
    </Main>
  </LayoutWrapper>
)

export default Layout
