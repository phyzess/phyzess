import React from 'react'
import styled from '@emotion/styled'
import { parseImageUrl } from '@phyzess/nophy'
import { IThemedProps } from '@root/theme'
import { getPredefinedColor, getPredefinedFontColor, TPredefinedColor } from '@root/predefinedColor'
import { IArticleSectionProps } from './types'

interface ICalloutStyle {
  color?: TPredefinedColor
  bgColor?: TPredefinedColor
}

const CalloutWrapper = styled.div<ICalloutStyle & IThemedProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 16px 16px 12px;
  color: ${({ color, theme }) =>
    color ? getPredefinedFontColor(color, color === 'gray' ? 0.6 : 1) : theme.neuPrimary};
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ color }) => (color ? 'rgba(55, 53, 47, 0.09)' : 'transparent')};
  background-color: ${({ bgColor }) => (bgColor ? getPredefinedColor(bgColor, 0.3) : 'transparent')};
`

const CalloutIcon = styled.span`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  text-align: center;
`

const CalloutImg = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  vertical-align: center;
`

const CalloutContent = styled.div`
  flex: 1;
`

const isUrl = (icon: string) => icon.startsWith('http')

const Callout: React.FC<IArticleSectionProps> = ({ section: { html, format } }) => {
  let color: TPredefinedColor = 'default'
  let bgColor: TPredefinedColor = 'default'

  const blockColor = format?.block_color
  if (blockColor) {
    const reg = /.+_background$/
    if (reg.test(blockColor)) {
      bgColor = blockColor.split('_')[0] as TPredefinedColor
    } else {
      color = blockColor as TPredefinedColor
    }
  }
  const icon = format?.page_icon || ''
  return (
    <CalloutWrapper color={color} bgColor={bgColor}>
      <CalloutIcon>{isUrl(icon) ? <CalloutImg src={parseImageUrl(icon)} /> : icon}</CalloutIcon>
      <CalloutContent>{html[0].content}</CalloutContent>
    </CalloutWrapper>
  )
}

export default Callout
