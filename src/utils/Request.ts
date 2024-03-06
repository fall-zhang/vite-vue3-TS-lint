export function getQueryString(params: Record<string, string>) {
  const searchParam = new URLSearchParams(params)
  return '?' + searchParam.toString()
}

export function getFormData(params: Record<string, string | Blob>) {
  const formData = new FormData()
  Object.keys(params).forEach(item => {
    formData.set(item, params[item])
  })
  return formData
}