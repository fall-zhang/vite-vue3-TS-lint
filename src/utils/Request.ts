// 只作为一个请求工具，记得可以扩展，加上 token 之类的验证
const url = ''
fetch(url, {})
class HTTPRequest {
  constructor() {

  }

  post = {}
}

function getQueryString(params: Record<string, string>) {
  const searchParam = new URLSearchParams(params)
  return '?' + searchParam.toString()
}
function getFormData(params: Record<string, string | Blob>) {
  const formData = new FormData()
  Object.keys(params).forEach(item => {
    formData.set(item, params[item])
  })
  return formData
}

export default new HTTPRequest()
