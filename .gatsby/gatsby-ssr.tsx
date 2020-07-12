import React from 'react'
import { RootComponent } from '../src/root'

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return <RootComponent>{element}</RootComponent>
}

/**
 * insert custom header HTML
 */
const FiraCodeCDN: React.FC<any> = () => (
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css'></link>
)

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.push(<FiraCodeCDN key='phyzess-fira-code' />)
  replaceHeadComponents(headComponents)
}
