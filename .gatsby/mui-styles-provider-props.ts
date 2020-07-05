import { createGenerateClassName } from '@material-ui/core'

const generateClassName = createGenerateClassName({
  productionPrefix: 'phyzess',
})

const stylesProviderProps = {
  injectFirst: true,
}

export default stylesProviderProps
