import React from 'react'
import { Card, CardActionArea, CardContent, Typography, Divider, makeStyles } from '@material-ui/core'
import { Link } from 'gatsby'
import { IPost } from './types'

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    margin: '1em auto',
  },
})

interface IPostListItemProps {
  postMeta: IPost
}
const PostListItem: React.FC<IPostListItemProps> = ({
  postMeta: { name, created_time, last_edited_time, article },
}) => {
  const cls = useStyles()

  const GatsbyLink = (props: any) => <Link to={`/posts/${name}`} {...props} />

  return (
    <>
      <Card className={cls.card}>
        <CardActionArea component={GatsbyLink}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography component='p'>{article[0].html[0].content}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider />
    </>
  )
}

export default PostListItem
