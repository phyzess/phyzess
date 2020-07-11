import { IBasicColor, IBasicTheme } from './interface'

export const basicColor: IBasicColor = {
  primary: '#f8807d',
  secondary: '#2879d0',
  contrastText: '#f1fcff',
  white: '#fff',
  black: '#000',
  red: '#AE1100',
  primaryActive: '#f36f61',
}

export const basicTheme: IBasicTheme = {
  ...basicColor,
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-in-out',
  borderRadius: '5px',
}

export const headerFontFamily = ['Nunito', 'Source Sans Pro', 'sans-serif'].join(',')
export const bodyFontFamily = ['Nunito', 'Avenir', 'Helvetica', 'sans-serif'].join(',')
