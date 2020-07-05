import React from 'react'
import { RootComponent } from '../src/root'
// custom typefaces
import 'typeface-nunito'

import 'normalize.css'
import 'prismjs/themes/prism.css'
import 'katex/dist/katex.min.css'

import '../src/stylus/reset.styl'

// 站点更新检测
export const onServiceWorkerUpdateFound = () => {
  window.localStorage.setItem('phyzess_updated', '1')
  // const answer = window.confirm(
  //   `Lange nicht gesehen. 站点已经更新了~` +
  //   `重新加载，展示新页面？`
  // )
  // if (answer === true) {
  //     window.location.reload()
  // }
}

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return <RootComponent>{element}</RootComponent>
}
