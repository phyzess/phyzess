import { useState } from 'react'
import { serializeSrc, imageListPromise } from './helper'
import { TUseImage, IImageCache } from './typings'

const imageCache: IImageCache = {}

const useImage: TUseImage = (src) => {
  const [loading, setLoading] = useState(true)
  const srcList = serializeSrc(src)
  const uniqKey = srcList.join('_')

  // 先判断是是否已有请求过的缓存
  // 没有的话新建一个缓存
  if (!imageCache[uniqKey]) {
    imageCache[uniqKey] = {
      promise: imageListPromise(srcList),
      status: 'pending',
      error: null,
    }
  }

  // 从缓存的 promise 中提取结果，赋值到 mutable 的 imageCache 中
  // 通过 setLoading 触发 reRender，从而从 imageCache 中提取最新结果
  imageCache[uniqKey].promise
    .then((src) => {
      imageCache[uniqKey] = { ...imageCache[uniqKey], status: 'resolved', src }
      setLoading(false)
    })
    .catch((error) => {
      imageCache[uniqKey] = { ...imageCache[uniqKey], status: 'reject', error }
      setLoading(false)
    })

  // 成功的结果
  if (imageCache[uniqKey].status === 'resolved') {
    return { loading, src: imageCache[uniqKey].src, error: null }
  }

  // 所有都报错或 src 为空数组或空字符串的结果
  if (imageCache[uniqKey].status === 'reject') {
    return { loading, src: undefined, error: imageCache[uniqKey].error }
  }

  // 初始化以及默认结果
  return {
    src: undefined,
    loading,
    error: null,
  }
}

export default useImage
