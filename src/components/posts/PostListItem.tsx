import React from 'react'
import { Card, CardActionArea, CardContent, Typography, Divider, makeStyles } from '@material-ui/core'
import { Link } from 'gatsby'
import { $colorShadow } from '@theme/theme'
import { IPost } from './types'

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: '0 auto',
  },
  contentRoot: {
    padding: '20px 36px',
  },
  dividerRoot: {
    margin: '2em auto',
    width: '40%',
    backgroundColor: $colorShadow,
  },
})

interface IPostListItemProps {
  postMeta: IPost
  last?: boolean
}
const PostListItem: React.FC<IPostListItemProps> = ({
  postMeta: { name, created_time, last_edited_time, article },
  last,
}) => {
  const cls = useStyles()

  const GatsbyLink = (props: any) => <Link to={`/posts/${name}`} {...props} />

  return (
    <>
      <Card classes={{ root: cls.root }}>
        <CardActionArea component={GatsbyLink}>
          <CardContent classes={{ root: cls.contentRoot }}>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography component='p'>{article[0].html[0].content}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {!last && <Divider classes={{ root: cls.dividerRoot }} />}
    </>
  )
}

export default PostListItem
