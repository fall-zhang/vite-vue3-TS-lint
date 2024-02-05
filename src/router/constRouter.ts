import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'
// import { BlankLayout } from '../layout'
import { isDevelopment } from '@/config'
import ErrorPage404 from '@/pages/error-pages/404.vue'
const constRouters: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@P/error-pages/404.vue'),
        meta: {}
      }
    ]
  },
  {
    path: '/home',
    component: () => import('@P/home.vue'),
    meta: { pageTitle: '首页' },
  },
  {
    path: '/example',
    component: BlankLayout,
    meta: { pageTitle: '首页' },
    children: [
      {
        path: '/example/fantable',
        component: () => import('@/example/SpreadSheet.vue'),
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
    children: [
    ]
  },
]
export default constRouters
