import React from 'react'
import { PageProps } from 'gatsby'
import { ThemeProvider, CssBaseline, StylesProvider, createGenerateClassName } from '@material-ui/core'
import { getDisplayName } from '@utils/getDisplayName'
import { theme } from './theme'
import { RouteProvider } from './routeContext'

export { default as RouteContext } from './routeContext'

const generateClassName = createGenerateClassName({
  productionPrefix: 'phyzess',
})

const withRoot = <P extends PageProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {
  class HOC extends React.PureComponent<P> {
    public static displayName = `${getDisplayName(Component)}WithRoot`

    public render() {
      const route = {
        location: this.props.location,
        pageContext: this.props.pageContext,
        pageResources: this.props.pageResources,
        path: this.props.path,
        pathContext: this.props.pathContext,
        uri: this.props.uri,
      }
      return (
        <RouteProvider value={route}>
          <StylesProvider generateClassName={generateClassName}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...this.props} />
            </ThemeProvider>
          </StylesProvider>
        </RouteProvider>
      )
    }
  }

  return HOC
}

export default withRoot
