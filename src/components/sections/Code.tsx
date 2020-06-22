import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { IArticleSectionProps } from './types'

const Code: React.FC<IArticleSectionProps> = ({ section: { html } }) => {
  const { content, language } = html[0]
  return (
    <SyntaxHighlighter showLineNumbers language={language?.toLowerCase()} style={atomDark}>
      {content}
    </SyntaxHighlighter>
  )
}

export default Code
