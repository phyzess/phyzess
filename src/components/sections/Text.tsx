import React from 'react'
import styled from '@emotion/styled'
import Link from '@components/link'
import { getFormat } from './formats'
import { IArticleSectionProps, IFormat } from './types'

const StyledText = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 16px;
  line-height: 1.5;
`

const Text: React.FC<IArticleSectionProps> = React.memo(({ section: { html }, ...restProps }) => (
  <StyledText>
    {html.map(({ content, format }, index) => {
      if (!format || format.length === 0) {
        return <span {...restProps}>{content}</span>
      }

      const usedFormats: IFormat[] = format.filter((i) => i.type !== 'link') as IFormat[]
      const formatCSS = usedFormats.map((i) => getFormat[i.type](i))

      const linkFormat = format.find((i) => i.type === 'link')
      if (linkFormat) {
        return (
          <Link key={index} css={formatCSS} as='a' to={linkFormat.url as string}>
            {content}
          </Link>
        )
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
