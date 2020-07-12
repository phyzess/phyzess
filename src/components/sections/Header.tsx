import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { ITheme, IThemedProps } from '@root/theme'
import { IArticleSectionProps } from './types'

const commonCss = (theme: ITheme) => css`
  margin-top: 1em;
  margin-bottom: 1px;
  font-weight: 400;

  &:before {
    padding-right: 0.3em;
    margin-left: -0.5em;
    font-family: PhyzessLombok;
    color: ${theme.primary};
    opacity: 0.8;
  }
`

const StyledHeader = styled.h2<IThemedProps>`
  ${({ theme }) => commonCss(theme)}

  &:before {
    content: 'H';
  }
`

const StyledSubHeader = styled.h3<IThemedProps>`
  ${({ theme }) => commonCss(theme)}

  &:before {
    content: 'H';
  }
`

const StyledSubSubHeader = styled.h4<IThemedProps>`
  ${({ theme }) => commonCss(theme)}

  &:before {
    content: 'H';
  }
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
