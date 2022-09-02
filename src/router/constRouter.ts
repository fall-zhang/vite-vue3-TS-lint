import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'
// import { BlankLayout } from '../layout'
import ComponentCollection from '@C/_collection/index.vue'
const constRouters: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@V/LayoutPage1/index.vue'),
        meta: {}
      }
    ]
  }, {
    path: '/home',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@V/LayoutPage1/index.vue'),
        meta: {}
      }
    ]
  }, {
    path: '/',
    redirect: '/components',
  }, {
    path: '/components',
    component: ComponentCollection,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@V/LayoutPage1/index.vue'),
        meta: {}
      }
    ]
  }, {
    path: '/*',
    component: ComponentCollection,
    redirect: '/components',
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@V/LayoutPage1/index.vue'),
        meta: {}
      }
    ]
  }
]
export default constRouters
