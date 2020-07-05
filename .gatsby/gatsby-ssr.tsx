import React from 'react'
import { RootComponent } from '../src/root'

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return <RootComponent>{element}</RootComponent>
}
