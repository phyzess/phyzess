export type TPredefinedColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'

export type TPredefinedColorRgb = {
  [key in TPredefinedColor]: string
}

export const predefinedColorRgb: TPredefinedColorRgb = {
  default: '255, 255, 255',
  gray: '235, 236, 237',
  brown: '233, 229, 227',
  orange: '250, 235, 221',
  yellow: '251, 243, 219',
  green: '221, 237, 234',
  blue: '221, 235, 241',
  purple: '234, 228, 242',
  pink: '244, 223, 235',
  red: '251, 228, 228',
}

export const getPredefinedColor = (name: TPredefinedColor, alpha = 1) =>
  `rgba(${predefinedColorRgb[name]}, ${0 <= alpha && alpha <= 1 ? alpha : 1})`

export const predefinedFontColorRgb: TPredefinedColorRgb = {
  default: '97, 103, 124',
  gray: '55, 53, 47',
  brown: '100, 71, 58',
  orange: '217, 115, 13',
  yellow: '223, 171, 1',
  green: '15, 123, 108',
  blue: '11, 110, 153',
  purple: '105, 64, 165',
  pink: '173, 26, 114',
  red: '224, 62, 62',
}

export const getPredefinedFontColor = (name: TPredefinedColor, alpha = 1) =>
  `rgba(${predefinedFontColorRgb[name]}, ${0 <= alpha && alpha <= 1 ? alpha : 1})`
