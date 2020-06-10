import React from 'react'
import { PageProps } from 'gatsby'
import bemFactor from '@utils/bemFactor'

import { LayoutWrapper, Main } from './index.styled'
import Header from './Header'
import Footer from './Footer'
import './reset.styl'

const cls = bemFactor('layout')

interface ILayoutProps {
  location: PageProps['location']
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const defaultLocation: PageProps['location'] = {} as PageProps['location']
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
