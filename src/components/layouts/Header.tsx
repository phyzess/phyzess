import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import bemFactor from '@utils/bemFactor'
import Link from '@components/link'
import { LocationContext } from './index'
import { HeaderWrapper } from './index.styled'

const cls = bemFactor('layout')

const Header: React.FC<any> = () => {
  const { pathname } = useContext(LocationContext)
  const {
    siteMeta: { navList },
  } = useStaticQuery(graphql`
    query {
      siteMeta {
        navList {
          path
          name
          as
        }
      }
      sitePage {
        matchPath
      }
    }
  `)

  const isRoot = pathname === '/'
  const linkNavList = isRoot ? navList.slice(1) : navList
  return (
    <HeaderWrapper className={cls('header')}>
      {linkNavList.map(({ path, name, as }) => (
        <Link to={path} as={as} key={path}>
          {name}
        </Link>
      ))}
    </HeaderWrapper>
  )
}
export default Header
