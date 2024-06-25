import type { RouteRecordRaw } from 'vue-router'
import ExampleLayout from '@/layout/ExampleLayout.vue'

const exampleComponents = import.meta.glob('@/example/*.vue')

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
  console.log('🚀 ~ genRoutes ~ result:', result)
  return result
}
export const exampleRoutes = genRoutes(exampleComponents)
// console.log("🚀 ~ exampleRoutes:", exampleRoutes)
const constRouters: RouteRecordRaw[] = [
  {
    path: '/example',
    component: ExampleLayout,
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