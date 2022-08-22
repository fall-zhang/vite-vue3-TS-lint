import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import constRoute from './constRouter'
import asyncRoute from './asyncRouter'
const router = createRouter({
  history: createWebHistory(),
  routes: asyncRoute.concat(constRoute) as RouteRecordRaw[]
})

export default router
