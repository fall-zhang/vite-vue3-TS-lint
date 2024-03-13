type fun = {
  (...args: any): any
}
export default function (fun: fun, args: any, time: number = 200) {
  let timber: null | NodeJS.Timeout = null
  return function () {
    if (timber) {
      clearTimeout(timber)
      timber = setTimeout(() => {
        fun(args)
      }, time)
    } else {
      timber = setTimeout(() => {
        fun(args)
      }, time)
    }
  }
}

export function throttle(fn: fun, delay: number, immediate: boolean) {
  let flag = true
  let immediateRender = immediate
  // let timer: NodeJS.Timeout = 0
  return () => {
    if (!flag) return
    flag = false
    if (immediateRender) {
      fn()
      immediateRender = false
    }
    setTimeout(() => {
      fn()
      flag = true
    }, delay)
  }
}
