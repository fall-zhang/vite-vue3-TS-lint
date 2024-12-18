/**
 * 将一个对象上所有数据的保留 x 位小数
 * @returns obj
 */
export const objNumberFixed = (obj, fixedNum = 2) => {
  const newObj = {}
  Object.keys(obj).forEach(key => {
    newObj[key] = obj[key]
    const currentVal = obj[key]
    if (typeof currentVal === 'string') {
      const includeDot = currentVal.includes('.')
      const cantHaveSign = currentVal.includes('-')
      if (cantHaveSign) return
      const isNumber = !isNaN(Number(currentVal))
      if (isNumber && includeDot) {
        newObj[key] = parseFloat(currentVal).toFixed(fixedNum)
      }
    } else if (typeof currentVal === 'number') {
      newObj[key] = currentVal.toFixed(fixedNum)
    }

  })
  return newObj
}