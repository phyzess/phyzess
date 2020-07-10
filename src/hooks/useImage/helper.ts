import { TSrc } from './typings'

export const validateSrc = (src: string[]) => src.filter((_) => !!_)

export const transformToSrcArray = (src: TSrc) => (Array.isArray(src) ? src : [src])

export const serializeSrc = (src: TSrc) => validateSrc(transformToSrcArray(src))

export const generateImagePromise = (decode = true) => (src: string) =>
  new Promise((resolve, reject) => {
    const img = new Image()

    img.addEventListener(
      'load',
      () => {
        decode && img.decode ? img.decode().then(resolve).catch(reject) : resolve()
      },
      false
    )

    img.addEventListener('error', reject)

    img.src = src
  })

/**
 * @description 以 reduce 迭代方法逐个请求 srcList 中的图片
 *              返回第一个成功的 Promise 或在所有都失败后返回一个 Reject
 * @param srcList
 * @param promiseBuilder
 */
export const imageListPromise = (srcList: string[], promiseBuilder = generateImagePromise()) => {
  let done = false
  const [firstSrc, ...restSrc] = srcList

  return new Promise((resolve, reject) => {
    const next = (src: string) =>
      promiseBuilder(src).then(() => {
        done = true
        resolve(src)
      })

    restSrc
      .reduce((prevPromise, currentSrc) => {
        return prevPromise.catch((e) => {
          if (!done) {
            return next(currentSrc)
          }
        })
      }, next(firstSrc))
      .catch((e) => {
        reject(e)
      })
  })
}
