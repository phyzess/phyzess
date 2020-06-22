import React from 'react'
import { Divider as MUIDivider } from '@material-ui/core'
import { css } from '@emotion/core'
import { IArticleSectionProps } from './types'

const customCSS = css`
  margin: 0.6em auto;
  width: 80%;
`

const Divider: React.FC<IArticleSectionProps> = React.memo(() => <MUIDivider css={customCSS} />)

export default Divider
