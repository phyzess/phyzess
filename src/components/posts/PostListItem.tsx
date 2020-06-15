import React, { useMemo } from 'react'
import { Card, CardActionArea, CardContent, Typography, Divider, makeStyles } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Link from '@components/link'
import { TagGroup } from '@components/tag'
import { $colorSecondary, $colorTextBasic } from '@/root/theme'
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
  dividerRoot: {
    margin: '2.5em auto',
    width: '40%',
    backgroundColor: $colorSecondary,
  },
  timeStampRoot: {
    marginLeft: '0.3em',
    height: '20px',
    fontSize: '1em',
    color: $colorTextBasic,
  },
  introRoot: {
    marginTop: '1em',
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
              <DateRangeIcon fontSize='small' style={{ color: $colorTextBasic }} />
              <Typography variant='h6' component='span' classes={{ root: cls.timeStampRoot }}>
                {dayjs(created_time).format('MMM DD, YYYY')}
              </Typography>
            </SubTitleContainer>
            <Typography component='p' classes={{ root: cls.introRoot }}>
              {article[0].html[0].content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <TagGroup tags={tags} style={{ justifyContent: 'flex-end' }} />
      </Card>
      {!last && <Divider classes={{ root: cls.dividerRoot }} />}
    </>
  )
}

export default PostListItem
