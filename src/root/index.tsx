import React from 'react'
import { PageProps } from 'gatsby'
import { ThemeProvider, CssBaseline, StylesProvider, createGenerateClassName } from '@material-ui/core'
import { getDisplayName } from '@utils/getDisplayName'
import { theme } from './theme'

const generateClassName = createGenerateClassName({
  productionPrefix: 'phyzess',
})

const withRoot = <P extends PageProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {
  class HOC extends React.PureComponent<P> {
    public static displayName = `${getDisplayName(Component)}WithRoot`

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

export default withRoot
