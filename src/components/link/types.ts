import { SerializedStyles } from '@emotion/core'
import { ITheme } from '@root/theme'

export type Color = 'default' | 'primary' | 'secondary'

export interface ILinkProps {
  to: string
  as?: 'a' | 'route'
  neumorphism?: boolean
  colorType?: Color
  active?: boolean
  style?: React.CSSProperties
}

export type TGetCSS = (colorType: Color, neumorphism: boolean, active: boolean, theme: ITheme) => SerializedStyles[]
