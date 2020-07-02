import React from 'react'
import { Avatar as MuiAvatar, makeStyles } from '@material-ui/core'
import { ITheme, useTheme } from '@root/theme'
import logo from '@/../static/avatar.png'

const useStyles = (theme: ITheme) =>
  makeStyles({
    root: {
      padding: 3,
      transition: `all ${theme.transitionDuration} ${theme.transitionTimingFunction}`,

      '&:hover': {
        opacity: 0.8,
        backgroundColor: theme.white,
        boxShadow: theme.neuInnerShadowActive,
      },
    },
  })()

const Avatar = () => {
  const theme = useTheme()
  const cls = useStyles(theme)
  return <MuiAvatar classes={{ root: cls.root }} alt='phyzess.me' src={logo} />
}

export default Avatar
