/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-invalid-this */
/**
 * @todo 重写类型
 * @param fn
 * @param delay
 * @param immediately
 */
const debounce = (fn: () => void, delay: number, immediately: boolean) => {
  let timer: number
  return function () {
    let args: any = arguments
    // @ts-ignore
    let ctx = this
    // 如果存在 timer，那就要取消这一次计时，这是无论哪种方案都要进行的
    if (timer) {
      clearTimeout(timer)
    }
    if (immediately) {
      // 查看此次事件触发时，是否已在计时周期内
      let doIt = !timer
      // 新建一个 timer
      timer = window.setTimeout(function () {
        fn.apply(ctx, args)
      }, delay)
      // 如果当前 timer 为 null，那么久立即执行一次
      if (doIt) {
        fn.apply(ctx, args)
      }
    } else {
      // 未设置 immediately 参数，直接按照第一种方案执行，设置 timer
      timer = window.setTimeout(function () {
        fn.apply(ctx, args)
      }, delay)
    }
  }
}

export default debounce
