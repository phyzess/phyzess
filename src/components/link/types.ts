import { SerializedStyles } from '@emotion/core'

export type Color = 'default' | 'primary' | 'secondary'

export interface ILinkProps {
  to: string
  as?: 'a' | 'route'
  neumorphism?: boolean
  colorType?: Color
  active?: boolean
  style?: React.CSSProperties
}

export type TGetCSS = (colorType: Color, neumorphism: boolean, active: boolean) => SerializedStyles[]
