/* eslint-disable @typescript-eslint/prefer-function-type */
import { Theme } from '@material-ui/core'

export interface IBasicColor {
  primary: string // MUI 主色，用于 button 等的 primary
  secondary: string // MUI 次要色，用于 button 等的 secondary
  contrastText: string // MUI 文本位于色块中或 selection 时的文字颜色
  white: string // 白色
  black: string // 黑色
  red: string // 红色
  primaryActive: string // primary active 时的颜色
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBasicTheme extends IBasicColor {
  borderRadius: string
  transitionDuration: string
  transitionTimingFunction: string
}

/**
 * Neumorphism 风格样式
 */
export interface INeuColor {
  neuBackground: string // 背景色
  neuInverseBg: string // Neumorphism 与主题色调相反的颜色
  neuPrimary: string // Neumorphism 主色调，主要用于文字
  neuShadow: string // Neumorphism 次要色调，主要用于文字（浅色）及阴影
  neuTextDefault: string // Neumorphism 文字默认颜色
  neuTextSecondary: string // Neumorphism 文字浅色
  neuTextPrimary: string // Neumorphism 文字主色
  neuTextActive: string // Neumorphism 文字active色
  neuTextShadow: string // Neumorphism 文字阴影
}

export interface INeuBoxShadow {
  neuOutShadow: string // 外阴影
  neuOutShadowActive: string // 外阴影(active)
  neuInnerShadow: string // 内阴影
  neuInnerShadowActive: string // 内阴影(active)
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INeumorphismTheme extends INeuColor, INeuBoxShadow {}

export interface ITheme extends IBasicTheme, INeumorphismTheme {}

export interface IThemedProps {
  theme: ITheme
}

export interface IPrefersColorSchemeDetectorProps {
  children: (theme: Theme, themeConfig: ITheme) => React.ReactElement
}
