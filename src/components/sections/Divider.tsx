import React from 'react'
import { Divider as MUIDivider } from '@material-ui/core'
import { css } from '@emotion/core'
import { ITheme } from '@root/theme'
import { IArticleSectionProps } from './types'

const customCSS = (theme: ITheme) => css`
  margin: 1.5em auto;
  width: 80%;
  background: ${theme.neuInverseBg};
`

const Divider: React.FC<IArticleSectionProps> = () => <MUIDivider css={(theme) => customCSS(theme)} />

export default Divider
