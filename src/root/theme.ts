import { createMuiTheme } from '@material-ui/core'

export const colorPrimary = '#f8807d'
export const colorSecondary = '#0368FF'
export const colorContrastText = '#f1fcff'
export const colorWhite = '#fff'
export const colorBlack = '#000'
export const colorBg = '#EBECF0'

// Neumorphism basic color
export const $colorPrimary = '#61677C'
export const $colorSecondary = '#BABECC'
export const $colorWhite = colorWhite
// Neumorphism text color
export const $colorTextDefault = $colorPrimary
export const $colorTextSecondary = $colorSecondary
export const $colorTextPrimary = colorPrimary
export const $colorTextActive = '#d21a06'
export const $colorTextPrimaryReverse = colorPrimary
export const $colorBg = colorBg
// Neumorphism shadow
export const $outShadow = `-5px -5px 20px ${$colorWhite},  5px 5px 20px ${$colorSecondary}`
export const $outShadowActive = `-2px -2px 5px ${$colorWhite}, 2px 2px 5px ${$colorSecondary}`
export const $innerShadow = `inset 2px 2px 5px ${$colorSecondary}, inset -5px -5px 10px ${$colorWhite}`
export const $innerShadowActive = `inset 1px 1px 2px ${$colorSecondary}, inset -1px -1px 2px ${$colorWhite}`
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
        color: $colorPrimary,
      },
    }),
    {}
  )
const reduceBody = () =>
  ['body1', 'body2'].reduce(
    (acc, cur) => ({ ...acc, [cur]: { fontFamily: bodyFontFamily, color: $colorTextDefault } }),
    {}
  )

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary,
      contrastText: colorContrastText,
    },
    secondary: {
      main: colorSecondary,
      contrastText: colorContrastText,
    },
  },
  typography: {
    ...reduceHeaders(),
    ...reduceBody(),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: $colorBg,
          color: $colorTextDefault,
          textShadow: `1px 1px 1px ${$colorWhite}`,
        },
        '::selection': {
          background: $colorTextPrimaryReverse,
          color: colorContrastText,
          textShadow: 'none',
        },
        a: {
          color: $colorTextDefault,
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
