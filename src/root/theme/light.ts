import { basicColor } from './basic'
import { INeuColor, INeuBoxShadow, INeumorphismTheme } from './interface'

export const neuLightColor: INeuColor = {
  neuBackground: '#f0f0f3',
  neuShadow: '#AEAEC0',
  // neuShadow: '#BABECC',
  neuPrimary: '#474747',
  neuTextDefault: '#666',
  neuTextSecondary: '#BABECC',
  neuTextPrimary: basicColor.primary,
  neuTextActive: '#d21a06',
  neuTextShadow: basicColor.white,
}

export const neuLightBoxShadow: INeuBoxShadow = {
  neuOutShadow: `-2px -2px 5px ${basicColor.white}, 2px 2px 5px ${neuLightColor.neuShadow}`,
  neuOutShadowActive: `-5px -5px 20px ${basicColor.white},  5px 5px 20px ${neuLightColor.neuShadow}`,
  neuInnerShadow: `inset 1px 1px 2px ${neuLightColor.neuShadow}, inset -1px -1px 2px ${basicColor.white}`,
  neuInnerShadowActive: `inset 2px 2px 5px ${neuLightColor.neuShadow}, inset -5px -5px 10px ${basicColor.white}`,
}

export const neuThemeLight: INeumorphismTheme = {
  ...neuLightColor,
  ...neuLightBoxShadow,
}
