import { css } from '@emotion/core'
import { TGetFormaCSS, TFormatMap } from './types'

export const getInlineCodeCSS: TGetFormaCSS = () => css`
  line-height: normal;
  background: rgba(135, 131, 120, 0.15);
  font-family: 'Fira Code', monospace;
  color: #eb5757;
  border-radius: 3px;
  font-size: 85%;
  padding: 0.2em 0.4em;
`

export const getBoldCSS: TGetFormaCSS = () => css`
  font-weight: 600;
`

export const getBgCSS: TGetFormaCSS = ({ color }) => css`
  background-color: ${color};
`

export const getColorCSS: TGetFormaCSS = ({ color }) => css`
  color: ${color};
`

export const getItalicCSS: TGetFormaCSS = () => css`
  font-style: italic;
`

export const getLineThroughCSS: TGetFormaCSS = () => css`
  text-decoration: line-through;
`

export const getInlineEquation: TGetFormaCSS = () => css`
  padding: 0 3px;
`

export const getFormat: TFormatMap = {
  inlineCode: getInlineCodeCSS,
  bold: getBoldCSS,
  backgroundColor: getBgCSS,
  color: getColorCSS,
  italic: getItalicCSS,
  lineThrough: getLineThroughCSS,
  inlineEquation: getInlineEquation,
}
