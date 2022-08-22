import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'
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
    ],
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@V/LayoutPage1/index.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true
    }
  },
  {
    path: '/*',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@V/LayoutPage1/index.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true
    }
  }
]
export default constRouters
