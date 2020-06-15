import React, { memo } from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    fontSize: '0.8em',
  },
})

interface ITagProps {
  tag: string
  style?: React.CSSProperties
}

const Tag: React.FC<ITagProps> = memo(({ tag, style }) => {
  const cls = useStyle()
  return (
    <Typography key={tag} component='span' classes={{ root: cls.root }} style={style}>
      #{tag}
    </Typography>
  )
})

export default Tag
