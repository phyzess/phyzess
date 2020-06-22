import React from 'react'
import { css } from '@emotion/core'
import LaunchIcon from '@material-ui/icons/Launch'
import Link from '@components/link'
import { IArticleSectionProps } from './types'

const iconCSS = css`
  margin-right: 5px;
`

const Page: React.FC<IArticleSectionProps> = ({ section: { html } }) => {
  const { content } = html[0]
  return (
    <div>
      <Link to={`/posts/${content}`} as='route' colorType='primary'>
        <LaunchIcon fontSize='small' css={iconCSS} />
        {content}
      </Link>
    </div>
  )
}

export default Page
