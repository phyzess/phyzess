import React from 'react'
import { useMediaQuery, createMuiTheme } from '@material-ui/core'
import { ThemeContext } from '@emotion/core'
import { basicTheme, headerFontFamily, bodyFontFamily } from './basic'
import { neuThemeLight } from './light'
import { neuThemeDark } from './dark'
import { ITheme, IPrefersColorSchemeDetectorProps } from './interface'

export { ITheme, IThemedProps } from './interface'

export const useTheme = (): ITheme => React.useContext(ThemeContext) as ITheme

const reduceHeaders = (theme: ITheme) =>
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: {
        fontFamily: headerFontFamily,
        fontWeight: 400,
        color: theme.neuPrimary,
      },
    }),
    {}
  )
const reduceBody = (theme: ITheme) =>
  ['body1', 'body2'].reduce(
    (acc, cur) => ({ ...acc, [cur]: { fontFamily: bodyFontFamily, color: theme.neuTextDefault } }),
    {}
  )

export const getMuiTheme = (theme: ITheme) =>
  createMuiTheme({
    palette: {
      primary: {
        main: theme.primary,
        contrastText: theme.contrastText,
      },
      secondary: {
        main: theme.secondary,
        contrastText: theme.contrastText,
      },
    },
    typography: {
      ...reduceHeaders(theme),
      ...reduceBody(theme),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            backgroundColor: theme.neuBackground,
            color: theme.neuTextDefault,
            textShadow: `1px 1px 1px ${theme.neuTextShadow}`,
          },
          '::selection': {
            background: theme.primary,
            color: theme.contrastText,
            textShadow: 'none',
          },
          a: {
            color: theme.neuTextDefault,
          },
        },
      },
      MuiCard: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: theme.neuOutShadow,

          '&:hover': {
            boxShadow: theme.neuOutShadowActive,
          },
        },
      },
      MuiCardActionArea: {
        focusHighlight: {
          backgroundColor: 'transparent',
        },
      },
      MuiExpansionPanel: {
        root: {
          boxShadow: theme.neuOutShadow,
        },
      },
    },
  })

export const getAliveThemeConfig = (preferDark: boolean) =>
  Object.assign(basicTheme, preferDark ? neuThemeDark : neuThemeLight)

export const PrefersColorSchemeDetector: React.FC<IPrefersColorSchemeDetectorProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const aliveThemeConfig = getAliveThemeConfig(prefersDarkMode)
  const theme = React.useMemo(() => getMuiTheme(aliveThemeConfig), [prefersDarkMode])
  return <div>{children(theme, aliveThemeConfig)}</div>
}
