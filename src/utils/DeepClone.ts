export function deepClone(content: any): any {
  if (typeof content !== 'object') {
    return content
  }
  const result: any = Array.isArray(content) ? [] : {}
  if (Array.isArray(content)) {
    content.forEach(item => {
      if (typeof item === 'object' && item !== null) {
        const afterDeep = deepClone(item)
        result.push(afterDeep)
      } else {
        result.push(item)
      }
    })
  } else {
    Object.keys(content).forEach(item => {
      if (typeof result[item] !== 'object') {
        result[item] = content[item]
      } else {
        const afterDeep = deepClone(item)
        result[item] = afterDeep
      }
    })
  }
  return result
}
