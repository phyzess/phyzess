/* eslint-disable @typescript-eslint/no-invalid-this */
/**
 * 时间戳 + 定时器的实现方式
 * 让事件在第一次触发时立即调用一次，随后再按照每 delay 事件调用一次
 * @todo 重写类型
 */
const throttle = (fn: () => any, delay: number) => {
  let prevTime = Date.now()
  let timer: number
  let args: any
  let ctx: any

  return function () {
    let curTime = Date.now()
    let remaining = delay - (curTime - prevTime)
    args = arguments
    // @ts-ignore
    ctx = this

    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(ctx, args)
      prevTime = curTime
    } else {
      timer = window.setTimeout(function () {
        fn.apply(ctx, args)
      }, delay)
    }
  }
}

export default throttle
