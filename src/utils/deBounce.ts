type fun = {
  (...args: any): any
}
export default function (fun: fun, args: any, time: number = 200) {
  let timber: null | number = null
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