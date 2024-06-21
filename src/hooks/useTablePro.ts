import request from '@/core/request'
import { getQueryString } from '@/utils/request'

interface TableSearchParam {
  api:string,
  params?:Record<string, unknown>
  formData?:Record<string, string|Blob|File>
  query?:Record<string, string>
}
/**
 *
 * @param param0
 */
export const useTablePro = async ({
  api,
  params,
  formData,
  query,
}:TableSearchParam) => {
  const pagination = reactive({
    size: '',
    total: '',
    pageNum: ''
  })
  watch(() => pagination.pageNum, (newVal) => {
    let requestParam:Record<string, unknown>|FormData|string |null = null
    let queryString = ''
    let requestMethod = null
    if (params) {
      requestParam = params
    } else if (formData) {
      requestParam = new FormData()
      Object.keys(formData).forEach(item => {
        (requestParam as FormData).append(item, formData[item])
      })
    } else if (query) {
      queryString = getQueryString(query)
    } else {
      requestParam = {}
    }
    if (queryString) {
      requestMethod = request(queryString)
    } else {
      requestMethod = request(api + queryString, requestParam)
    }
    requestMethod.then(res => {
      console.log('🚀 ~ watch ~ res:', res)
    })
  })
  return {
    pagination
  }
}