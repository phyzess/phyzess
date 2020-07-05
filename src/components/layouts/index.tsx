import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import bemFactor from '@utils/bemFactor'

import { LayoutWrapper, Main } from './styled'
import Header from './Header'
import Footer from './Footer'
import Notification from '@components/notification'

const cls = bemFactor('layout')

interface ILayoutProps {
  children: NonNullable<React.ReactNode>
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [updated, setUpdated] = useState(false)
  useEffect(() => setUpdated(localStorage.getItem('phyzess_updated') === '1'), [])
  return (
    <LayoutWrapper className={cls('wrapper')}>
      {updated && <Notification />}
      <Header />
      <Main className={cls('main')}>
        <Container maxWidth='md'>{children}</Container>
        <Footer />
      </Main>
    </LayoutWrapper>
  )
}

export default Layout
