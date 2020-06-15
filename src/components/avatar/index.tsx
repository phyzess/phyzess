import React from 'react'
import { Avatar as MuiAvatar, makeStyles } from '@material-ui/core'
import { $colorWhite, $innerShadowActive, $transitionDuration, $transitionTimingFunction } from '@/root/theme'
import logo from '@/../static/avatar.png'

const useStyles = makeStyles({
  root: {
    padding: 3,
    transition: `all ${$transitionDuration} ${$transitionTimingFunction}`,

    '&:hover': {
      opacity: 0.8,
      backgroundColor: $colorWhite,
      boxShadow: $innerShadowActive,
    },
  },
})

const Avatar = () => {
  const cls = useStyles()
  return <MuiAvatar classes={{ root: cls.root }} alt='phyzess.me' src={logo} />
}

export default Avatar
