import React from 'react'
import styled from '@emotion/styled'
import { IArticleSectionProps } from './types'

const StyledQuote = styled.blockquote`
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding: 0.5em 20px;
  border-left: 3px solid currentcolor;
`

const Quote: React.FC<IArticleSectionProps> = React.memo(({ section: { html } }) => (
  <StyledQuote>{html[0].content}</StyledQuote>
))

export default Quote
