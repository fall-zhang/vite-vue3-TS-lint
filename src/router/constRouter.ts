import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'
// import { BlankLayout } from '../layout'
import { isDevelopment } from '@/config'
import ErrorPage404 from '@/pages/error-pages/404.vue'
import PageLayout from '@/layout/PageLayout.vue'
import ExampleLayout from '@/layout/ExampleLayout.vue'
const constRouters: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: PageLayout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@P/error-pages/404.vue'),
        meta: {}
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@P/login/LoginPage.vue'),
    meta: { pageTitle: '首页' },
  },
  {
    path: '/home',
    component: () => import('@P/home.vue'),
    meta: { pageTitle: '首页' },
  },
  // {
  //   path: '/example',
  //   component: ExampleLayout,
  //   meta: { pageTitle: '首页' },
  //   children: [
  //     {
  //       path: '/example/fantable',
  //       component: () => import('@/example/SpreadSheet.vue'),
  //     }
  //   ]
  // },
  {
    path: '/',
    redirect: '/home',
  },
]
export default constRouters
