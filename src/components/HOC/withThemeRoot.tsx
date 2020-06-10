import React from 'react'
import { ThemeProvider, CssBaseline, createMuiTheme, StylesProvider, createGenerateClassName } from '@material-ui/core'
import { getDisplayName } from '@utils/getDisplayName'

const generateClassName = createGenerateClassName({
  productionPrefix: 'phyzess',
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e7effe',
      contrastText: '#6e7a8d',
    },
    secondary: {
      main: '#77aaff',
      contrastText: '#f1fcff',
    },
  },
})

const withThemeRoot = <P extends {}>(Component: React.ComponentType<P>): React.ComponentType<P> => {
  class HOC extends React.PureComponent<P> {
    public static displayName = `${getDisplayName(Component)}WithThemeRoot`

    public render() {
      return (
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...this.props} />
          </ThemeProvider>
        </StylesProvider>
      )
    }
  }

  return HOC
}

export default withThemeRoot
