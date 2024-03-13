import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'

const exampleComponents = import.meta.glob('@/example/*.vue')
console.log('🚀 ~ exampleComponents:', exampleComponents)
// function getFileName(fileList: Record<string, any>) {
//   const result = Object.keys(fileList).map(filePath => {
//     const fileName = filePath.split('/').at(-1)
//     return fileName
//   })
//   return result
// }
function getFileName(fileName: string) {
  return fileName.split('/').at(-1)
}
// console.log("🚀 ~ fileNameList:", fileNameList)
function genRoutes(fileList: Record<string, any>) {
  const result = Object.keys(fileList).map(filePath => {
    const fileName = getFileName(filePath)
    const filePrefix = fileName?.slice(0, -4)
    return {
      path: '/example/' + filePrefix,
      name: filePrefix,
      component: fileList[filePath],
      meta: {

      }
    }
  })
  return result
}
export const exampleRoutes = genRoutes(exampleComponents)
// console.log("🚀 ~ exampleRoutes:", exampleRoutes)
const constRouters: RouteRecordRaw[] = [
  {
    path: '/example',
    component: BlankLayout,
    children: [
      ...exampleRoutes,
      {
        path: '/example/:others',
        // component: () => import('@/pages/error-pages/404.vue'),
        redirect: exampleRoutes[0].path,
        meta: {}
      }
    ]
  },
]
export default constRouters