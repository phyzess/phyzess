import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { ThemeContext } from '@emotion/core'
import { PrefersColorSchemeDetector } from './theme'

const Root: React.FC<{}> = ({ children }) => {
  return (
    <PrefersColorSchemeDetector>
      {(theme, aliveThemeConfig) => (
        <ThemeContext.Provider value={aliveThemeConfig}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      )}
    </PrefersColorSchemeDetector>
  )
}

export default Root
