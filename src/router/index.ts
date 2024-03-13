import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import constRoute from './constRouter'
import asyncRoute from './asyncRouter'
import exampleRoutes from './exampleRouter'
const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoute.concat(constRoute, exampleRoutes) as RouteRecordRaw[]
})

export default router
