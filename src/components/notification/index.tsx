import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import CachedIcon from '@material-ui/icons/Cached'
import styled from '@emotion/styled'
import { useTheme, ITheme, IThemedProps } from '@root/theme'

const useStyles = (theme: ITheme) =>
  makeStyles({
    btnRoot: {
      margin: '0 0.5em',
      color: theme.white,
      borderColor: theme.white,

      '&:hover': {
        borderColor: theme.primary,
      },
    },
  })()

const NotificationWrapper = styled.div<IThemedProps>`
  padding: 0.5em 2em;
  width: 100%;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.secondary};
  text-shadow: none;
  text-align: center;
`

const Notification: React.FC<{}> = () => {
  const theme = useTheme()
  const cls = useStyles(theme)
  const handleClick = () => {
    window.localStorage.setItem('phyzess_updated', '0')
    window.location.reload()
  }

  return (
    <NotificationWrapper>
      Lange nicht gesehen.
      <Button
        size='small'
        variant='outlined'
        classes={{ root: cls.btnRoot }}
        startIcon={<CachedIcon />}
        onClick={handleClick}
      >
        更新页面
      </Button>
    </NotificationWrapper>
  )
}

export default Notification
