import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import constRoute from './constRouter'
const router = createRouter({
  history:createWebHistory(),
  routes:constRoute as RouteRecordRaw[]
})

export default router