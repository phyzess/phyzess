import { createMuiTheme } from '@material-ui/core'

export const colorPrimary = '#e7effe'
export const colorSecondary = '#77aaff'

// Neumorphism basic color
export const $colorGray = '#BABECC'
export const $colorTextBasic = '#61677C'
export const $colorTextPrimary = '#AE1100'
export const $colorTextActive = '#d21a06'
export const $colorBg = '#EBECF0'
export const $colorShadow = '#BABECC'
export const $colorWhite = '#FFF'
// Neumorphism shadow
export const $outShadow = `-5px -5px 20px ${$colorWhite},  5px 5px 20px ${$colorShadow}`
export const $outShadowActive = `-2px -2px 5px ${$colorWhite}, 2px 2px 5px ${$colorShadow}`
export const $innerShadow = `inset 2px 2px 5px ${$colorShadow}, inset -5px -5px 10px ${$colorWhite}`
export const $innerShadowActive = `inset 1px 1px 2px ${$colorShadow}, inset -1px -1px 2px ${$colorWhite}`
// Neumorphism animation
export const $transitionDuration = '0.2s'
export const $transitionTimingFunction = 'ease-in-out'

export const headerFontFamily = ['Nunito', 'Source Sans Pro', 'sans-serif'].join(',')
export const bodyFontFamily = ['Nunito', 'Avenir', 'Helvetica', 'sans-serif'].join(',')
const reduceHeaders = () =>
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: {
        fontFamily: headerFontFamily,
        fontWeight: 700,
        color: $colorGray,
      },
    }),
    {}
  )
const reduceBodyFontFamily = () =>
  ['body1', 'body2'].reduce(
    (acc, cur) => ({ ...acc, [cur]: { fontFamily: bodyFontFamily, color: $colorTextBasic } }),
    {}
  )

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary,
      contrastText: '#6e7a8d',
    },
    secondary: {
      main: colorSecondary,
      contrastText: '#f1fcff',
    },
  },
  typography: {
    ...reduceHeaders(),
    ...reduceBodyFontFamily(),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: $colorBg,
          color: $colorTextBasic,
          textShadow: `1px 1px 1px ${$colorWhite}`,
        },
        '::selection': {
          background: '#00ad9e',
          color: '#fff',
        },
        a: {
          color: $colorTextBasic,
        },
      },
    },
    MuiCard: {
      root: {
        backgroundColor: 'transparent',
        boxShadow: $outShadow,

        '&:hover': {
          boxShadow: $outShadowActive,
        },
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        backgroundColor: 'transparent',
      },
    },
  },
})
