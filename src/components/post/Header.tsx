import React, { useContext } from 'react'
import { Typography, Breadcrumbs, makeStyles } from '@material-ui/core'
import styled from '@emotion/styled'
import { RouteContext } from '@/root'
import { $colorTextSecondary } from '@root/theme'
import Link from '@components/link'
import Timestamp from '@components/timestamp'

interface IHeaderProps {
  title: string
  createTime: number
}

const useStyle = makeStyles({
  breadcrumbsSeparator: {
    marginLeft: 0,
    marginRight: 0,
    color: $colorTextSecondary,
  },
})

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledInfos = styled.header`
  margin: 0.4em 0;
`

const Header: React.FC<IHeaderProps> = ({ title, createTime }) => {
  const {
    location: {
      pathname,
      state: { prevPath },
    },
  } = useContext(RouteContext)
  const cls = useStyle()

  return (
    <header>
      <Title>
        <Breadcrumbs classes={{ separator: cls.breadcrumbsSeparator }} aria-label='breadcrumb'>
          <Link to={prevPath} colorType='secondary'>
            Posts
          </Link>
          <Link to={pathname} colorType='primary'>
            <Typography gutterBottom variant='h4' component='h1'>
              {title}
            </Typography>
          </Link>
        </Breadcrumbs>
      </Title>
      <StyledInfos>
        <Timestamp timestamp={createTime} />
      </StyledInfos>
    </header>
  )
}

export default Header
