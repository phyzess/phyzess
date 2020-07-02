import React from 'react'
import { Card, CardActionArea, CardContent, makeStyles, CardMedia } from '@material-ui/core'
import styled from '@emotion/styled'
import { useTheme, ITheme } from '@root/theme'
import { IArticleSectionProps } from './types'

const useStyles = (theme: ITheme) =>
  makeStyles({
    root: {
      boxShadow: theme.neuInnerShadow,
      '&:hover': {
        boxShadow: theme.neuInnerShadowActive,
      },
    },
    actionRoot: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'initial',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  })()

const BookmarkTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 24px;
  margin-bottom: 2px;
`

const BookmarkDesc = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: rgba(55, 53, 47, 0.6);
  height: 32px;
  overflow: hidden;
`

const BookmarkLink = styled.div`
  display: flex;
  margin-top: 6px;
`

const BookmarkLinkIcon = styled.img`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-right: 6px;
`

const BookmarkLinkSrc = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Bookmark: React.FC<IArticleSectionProps> = ({ section: { html, format } }) => {
  const theme = useTheme()
  const cls = useStyles(theme)
  return (
    <Card classes={{ root: cls.root }}>
      <CardActionArea classes={{ root: cls.actionRoot }} component='a' href={html[0].link}>
        <CardContent>
          <BookmarkTitle>{html[0].content}</BookmarkTitle>
          <BookmarkDesc>{html[0].description}</BookmarkDesc>
          <BookmarkLink>
            {format?.bookmark_icon && <BookmarkLinkIcon src={format?.bookmark_icon} />}
            <BookmarkLinkSrc>{html[0].link}</BookmarkLinkSrc>
          </BookmarkLink>
        </CardContent>
        <CardMedia className={cls.cover} image={format?.bookmark_cover} title='Live from space album cover' />
      </CardActionArea>
    </Card>
  )
}

export default Bookmark
