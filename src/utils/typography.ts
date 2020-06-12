/**
 * 会被 material-ui 覆盖
 */
import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const theme = {
  ...moragaTheme,
  headerFontFamily: ['Nunito', 'Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'Avenir', 'Helvetica', 'sans-serif'],
  baseFontSize: '16px',
}

theme.overrideThemeStyles = () => ({
  a: {
    color: '#08979c',
  },
  'a:hover': {
    color: '#006d75',
    textDecoration: `none`,
  },
})

delete theme.googleFonts

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
