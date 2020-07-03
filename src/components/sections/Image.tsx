import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { parseImageUrl } from '@phyzess/nophy'
import { IArticleSectionProps } from './types'

const ImageWrapper = styled.div`
  margin: 0.5em auto;
  width: 90%;
  max-width: 960px;
  align-self: center;
`

const imageCSS = css`
  display: block;
  width: 100%;
  object-fit: cover;
  border: 0;
  border-radius: 0.5em;
  pointer-events: auto;
`

const cationCSS = css`
  padding: 0.5em 1em;
  font-size: 12px;
`

/**
 *
 * @todo 添加懒加载和 skeleton
 */
const Image: React.FC<IArticleSectionProps> = ({
  section: {
    html: [{ content, caption }],
  },
}) => {
  return (
    <ImageWrapper>
      <img css={imageCSS} src={parseImageUrl(content)} />
      <Typography css={cationCSS} component='p'>
        {caption}
      </Typography>
    </ImageWrapper>
  )
}

export default Image
