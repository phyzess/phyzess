import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import { Grid, makeStyles } from '@material-ui/core'
import bemFactor from '@utils/bemFactor'
import Link from '@components/link'
import Avatar from '@components/avatar'
import { HeaderWrapper } from './styled'

const cls = bemFactor('layout')

const homeRoute: SiteMeta.INavItem = {
  path: '/',
  name: 'phyzess',
  as: 'route',
}

const useStyle = makeStyles({
  gridRoot: {
    padding: '0px !important',
  },
})

interface IQueriedData {
  siteMeta: SiteMeta.ISiteMetaData
}

const Header: React.FC<any> = () => {
  const { pathname } = useLocation()
  const {
    siteMeta: { navList },
  }: IQueriedData = useStaticQuery(graphql`
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

  const classes = useStyle()

  const isRoot = pathname === '/'

  return (
    <HeaderWrapper className={cls('header')}>
      <Grid container justify='flex-end' alignItems='center' spacing={2}>
        {!isRoot && (
          <Grid container alignItems='center' item xs={1} classes={{ root: classes.gridRoot }}>
            <Link to={homeRoute.path} as={homeRoute.as}>
              <Avatar />
            </Link>
          </Grid>
        )}
        <Grid
          item
          xs={11}
          container
          classes={{ root: classes.gridRoot }}
          justify='flex-end'
          alignItems='center'
          spacing={2}
        >
          {navList.map(({ path, name, as }) => (
            <Grid item xs='auto' key={path} zeroMinWidth>
              <Link to={path} as={as} neumorphism active={pathname.startsWith(path)}>
                {name}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </HeaderWrapper>
  )
}
export default Header
