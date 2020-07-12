import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { IThemedProps } from '@root/theme'
import { IArticleSectionProps } from './types'

const syntaxHighlighterCss = css`
  font-size: 0.9em;
  border-radius: 0.5em !important;
  font-family: PhyzessFiraCode !important;
  & * {
    font-family: PhyzessFiraCode !important;
  }
`

const CodeWrapper = styled.div<IThemedProps>`
  margin: 1em auto;
  width: 90%;
  box-shadow: ${({ theme }) => theme.neuOutShadow};
  border-radius: 0.5em;
`

const Code: React.FC<IArticleSectionProps> = ({ section: { html } }) => {
  const { content, language } = html[0]
  return (
    <CodeWrapper>
      <SyntaxHighlighter
        showLineNumbers
        language={language?.toLowerCase()}
        style={atomOneDark}
        css={syntaxHighlighterCss}
      >
        {content}
      </SyntaxHighlighter>
    </CodeWrapper>
  )
}

export default Code
