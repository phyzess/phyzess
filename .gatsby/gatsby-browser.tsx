import React from 'react'
import { RootComponent } from '../src/root'
// custom typefaces
import 'typeface-nunito'

import 'normalize.css'
import 'prismjs/themes/prism.css'
import 'katex/dist/katex.min.css'

import '../src/stylus/reset.styl'

// 站点更新检测
export const onServiceWorkerUpdateReady = () => {
  /**
   * 暂时没有找到好的方法能强制 reRender React
   * 因此这种方法只有在路由跳转以后才有效
   * 先使用 window.confirm 吧
   */
  // window.localStorage.setItem('phyzess_updated', '1')
  const alertText = `
    Lange nicht gesehen.
    好久不见。
    站点已经更新了，重新加载~
  `
  const answer = window.confirm(alertText)
  if (answer === true) {
    window.location.reload(true)
  }
}

export const wrapRootElement: React.FC<any> = ({ element }) => {
  return <RootComponent>{element}</RootComponent>
}
