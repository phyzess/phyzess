import { basicColor } from './basic'
import { INeuColor, INeuBoxShadow, INeumorphismTheme } from './interface'

export const neuDarkColor: INeuColor = {
  neuBackground: '#1d1f21',
  neuInverseBg: 'rgba(255, 255, 255, 0.15)',
  neuShadow: '#2b2b2d',
  neuPrimary: '#f0f0f0',
  neuTextDefault: '#b9b9b9',
  neuTextSecondary: '#BABECC',
  neuTextPrimary: basicColor.primary,
  neuTextActive: basicColor.primaryActive,
  neuTextShadow: basicColor.black,
}

export const neuDarkBoxShadow: INeuBoxShadow = {
  neuOutShadow: `-2px -2px 5px ${neuDarkColor.neuShadow}, 2px 2px 5px ${basicColor.black}`,
  neuOutShadowActive: `-5px -5px 20px ${neuDarkColor.neuShadow},  5px 5px 20px ${basicColor.black}`,
  neuInnerShadow: `inset 1px 1px 2px ${basicColor.black}, inset -1px -1px 2px ${neuDarkColor.neuShadow}`,
  neuInnerShadowActive: `inset 2px 2px 5px ${basicColor.black}, inset -5px -5px 10px ${neuDarkColor.neuShadow}`,
}

export const neuThemeDark: INeumorphismTheme = {
  ...neuDarkColor,
  ...neuDarkBoxShadow,
}
