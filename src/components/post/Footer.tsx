import React from 'react'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import { IPage } from '@phyzess/nophy'
import styled from '@emotion/styled'
import Link from '@components/link'
import Comment from '@components/comment'
import { TagGroup } from '@components/tag'

export interface IFooterProps {
  previous: Partial<IPage>
  next: null | Partial<IPage>
  tags: string
  id: string
  name: string
}

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
  padding: 0 0.5em;
`

const StyledName = styled.span`
  display: inline-block;
  flex: 1;
  white-space: nowrap;
`

const Footer: React.FC<IFooterProps> = ({ previous, next, tags, id, name }) => {
  return (
    <footer>
      <FooterRow>
        <TagGroup tags={tags} />
      </FooterRow>
      <FooterRow>
        {previous && (
          <Link colorType='primary' to={`/posts/${previous.name}`}>
            <ChevronLeftRoundedIcon fontSize='small' />
            <StyledName>{previous.name}</StyledName>
          </Link>
        )}
        {next && (
          <Link colorType='primary' to={`/posts/${next.name}`}>
            <StyledName>{next.name}</StyledName>
            <ChevronRightRoundedIcon fontSize='small' />
          </Link>
        )}
      </FooterRow>
      <FooterRow>
        <Comment title={name} id={id} />
      </FooterRow>
    </footer>
  )
}

export default Footer
