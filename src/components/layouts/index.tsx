import React from 'react'
import bemFactor from '@utils/bemFactor'

import { LayoutWrapper, Main } from './index.styled'
import Header from './Header'
import Footer from './Footer'
import './reset.styl'

const cls = bemFactor('layout')

interface Location {
  pathname?: string
  search?: string
  hash?: string
  href?: string
  origin?: string
  protocol?: string
  host?: string
  hostname?: string
  port?: string
  state?: any
  key?: string
  action?: string
}
interface ILayoutProps {
  location: Location
}

const defaultLocation: Location = {}
export const LocationContext = React.createContext(defaultLocation)

const Layout: React.FC<ILayoutProps> = ({ location, children }) => {
  return (
    <LayoutWrapper className={cls('wrapper')}>
      <LocationContext.Provider value={location}>
        <Header />
        <Main className={cls('main')}>{children}</Main>
        <Footer />
      </LocationContext.Provider>
    </LayoutWrapper>
  )
}

export default Layout
