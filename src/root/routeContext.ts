import { createContext } from 'react'
import { PageProps } from 'gatsby'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const defaultRouteContextValue = {} as PageProps['location']

const RouteContext = createContext<PageProps['location']>(defaultRouteContextValue)

export const RouteProvider = RouteContext.Provider

export default RouteContext
