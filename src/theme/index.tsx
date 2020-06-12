import React from 'react'
import { ThemeProvider, CssBaseline, StylesProvider, createGenerateClassName } from '@material-ui/core'
import { getDisplayName } from '@utils/getDisplayName'
import { theme } from './theme'

const generateClassName = createGenerateClassName({
  productionPrefix: 'phyzess',
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
