import { createContext } from 'react'
import { PageProps } from 'gatsby'

type Location = PageProps['location'] & {
  state: {
    prevPath: string
    [key: string]: any
  }
}

interface TRouteContext extends Pick<PageProps, 'pageContext' | 'pageResources' | 'path' | 'pathContext' | 'uri'> {
  location: Location
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const defaultRouteContextValue = {} as TRouteContext

const RouteContext = createContext<TRouteContext>(defaultRouteContextValue)

export const RouteProvider = RouteContext.Provider

export default RouteContext
