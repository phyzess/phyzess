import React from 'react'
import styled from '@emotion/styled'
import Link from '@components/link'
import Equation from '@components/equation'
import { getFormat } from './formats'
import { IArticleSectionProps, IFormat } from './types'

const StyledText = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 16px;
  line-height: 1.75;
`

const Text: React.FC<IArticleSectionProps> = React.memo(({ section: { html }, sameWithPrevCount, ...restProps }) => (
  <StyledText>
    {html.map(({ content, format }, index) => {
      if (!format || format.length === 0) {
        return (
          <span key={index} {...restProps}>
            {content}
          </span>
        )
      }

      const usedFormats: IFormat[] = format.filter((i) => i.type !== 'link') as IFormat[]
      const formatCSS = usedFormats.map((i) => getFormat[i.type](i))
      const linkFormat = format.find((i) => i.type === 'link')
      const equationFormat = format.find((i) => i.type === 'inlineEquation')

      if (linkFormat) {
        return (
          <Link key={index} css={formatCSS} as='a' to={linkFormat.url as string}>
            {content}
          </Link>
        )
      }

      if (equationFormat) {
        return <Equation key={index} math={content} mode='inline' />
      }

      return (
        <span key={index} css={formatCSS} {...restProps}>
          {content}
        </span>
      )
    })}
  </StyledText>
))

export default Text
