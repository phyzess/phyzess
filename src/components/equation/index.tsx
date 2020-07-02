import React, { useState, useEffect } from 'react'
import KaTeX from 'katex'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { IThemedProps } from '@root/theme'
import { IEquationProps, IEquationItem, IEquation, IError } from './types'

const blockCss = css`
  overflow-x: auto;
`

const Error = styled.div<IError & IThemedProps>`
  display: ${({ mode }) => (mode === 'block' ? 'block' : 'inline-block')};
  padding: 0 5px;
  color: ${({ theme }) => theme.red};
  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-color: ${({ theme }) => theme.red};
`

const InlineEquation: React.FC<IEquationItem> = ({ html }) => <span dangerouslySetInnerHTML={{ __html: html }} />

const BlockEquation: React.FC<IEquationItem> = ({ html }) => (
  <div css={blockCss} dangerouslySetInnerHTML={{ __html: html }} />
)

const Equation: React.FC<IEquationProps> = ({ mode = 'block', math = '' }) => {
  const [{ html, error }, setEquation] = useState<IEquation>({
    html: '',
    error: undefined,
  })

  useEffect(() => {
    try {
      const equationString = KaTeX.renderToString(math, {
        displayMode: mode === 'block',
        output: 'html',
        throwOnError: true,
      })
      setEquation({
        html: equationString,
        error: undefined,
      })
    } catch (error) {
      if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
        setEquation({
          html: '',
          error: error.message,
        })
      }
    }
  }, [math])

  if (error) {
    return <Error mode={mode}>{error}</Error>
  }

  if (mode === 'inline') {
    return <InlineEquation html={html} />
  }

  return <BlockEquation html={html} />
}

export default Equation
