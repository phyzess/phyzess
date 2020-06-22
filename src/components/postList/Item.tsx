import React from 'react'
import { Card, CardActionArea, CardContent, Typography, makeStyles } from '@material-ui/core'
import styled from '@emotion/styled'
import Link from '@components/link'
import { TagGroup } from '@components/tag'
import Timestamp from '@components/timestamp'
import { IPost } from './types'

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '10px 36px',
  },
  contentRoot: {
    padding: '10px 0',
  },
  introRoot: {
    marginTop: '1em',
    height: '3em',
    opacity: 0.8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
})

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledDivider = styled.div`
  height: 5vw;
  max-height: 5vw;
`

interface IPostListItemProps {
  postMeta: IPost
  last?: boolean
}
const PostListItem: React.FC<IPostListItemProps> = ({ postMeta: { name, created_time, article, tags }, last }) => {
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
            <SubTitleContainer>
              <Timestamp timestamp={created_time} />
            </SubTitleContainer>
            <Typography component='p' classes={{ root: cls.introRoot }}>
              {article[0].html[0].content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <TagGroup tags={tags} style={{ justifyContent: 'flex-end' }} />
      </Card>
      {!last && <StyledDivider />}
    </>
  )
}

export default PostListItem
