export function getQueryString(params: Record<string, string>) {
  const searchParam = new URLSearchParams(params)
  return '?' + searchParam.toString()
}
/**
 * 将传入的对象，转换为 formData 格式并返回
 * @param params 传入对象
 * @returns 
 */
export function getFormData(params: Record<string, string | Blob>) {
  const formData = new FormData()
  Object.keys(params).forEach(item => {
    formData.set(item, params[item])
  })
  return formData
}