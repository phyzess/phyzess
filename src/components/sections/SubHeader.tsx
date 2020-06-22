import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { IArticleSectionProps } from './types'

const commonCss = css`
  margin-top: 1em;
  margin-bottom: 1px;
`

const StyledHeader = styled.h1`
  ${commonCss}
`

const StyledSubHeader = styled.h2`
  ${commonCss}
`

const StyledSubSubHeader = styled.h3`
  ${commonCss}
`

export const Header: React.FC<IArticleSectionProps> = React.memo(({ section: { html } }) => (
  <StyledHeader>{html[0].content}</StyledHeader>
))

export const SubHeader: React.FC<IArticleSectionProps> = React.memo(({ section: { html } }) => (
  <StyledSubHeader>{html[0].content}</StyledSubHeader>
))

export const SubSubHeader: React.FC<IArticleSectionProps> = React.memo(({ section: { html } }) => (
  <StyledSubSubHeader>{html[0].content}</StyledSubSubHeader>
))
