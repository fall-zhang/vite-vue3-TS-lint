import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'
// import { BlankLayout } from '../layout'
import { defineAsyncComponent as asyncImport } from 'vue'
import { isDevelopment } from '@/config'
import ErrorPage404 from '@/pages/404.vue'
import ComponentCollection from '@C/_collection/index.vue'
const constRouters: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@P/LayoutPage1/index.vue'),
        meta: {}
      }
    ]
  }, {
    path: '/home',
    component: asyncImport(() => import('@P/home.vue')),
    // children: [
    //   {
    //     path: '/redirect/:path*',
    //     component: () => import('@P/LayoutPage1/index.vue'),
    //     meta: {}
    //   }
    // ]
  }, {
    path: '/',
    redirect: '/home',
  }, {
    path: '/components',
    component: isDevelopment ? () => import('@C/_collection/index.vue') : ErrorPage404,
    meta: { pageTitle: '模块查看系统' },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@P/LayoutPage1/index.vue'),
        meta: { pageTitle: '模块查看系统' }
      }
    ]
  }, {
    path: '/*',
    component: ComponentCollection,
    name: '',
    redirect: '/components',
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@P/LayoutPage1/index.vue'),
        meta: {}
      }
    ]
  }
]
export default constRouters
