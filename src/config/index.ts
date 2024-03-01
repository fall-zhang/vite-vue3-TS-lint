// ? 全局默认配置项

// 首页地址（默认）
export const ROUTE_HOME: string = '/home/index'

// 登录页地址（默认）
export const ROUTE_LOGIN: string = '/login'

// 路由白名单地址（本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ['/500']

export const BASE_URL: string = '/api'

const env = import.meta.env
export const isDevelopment = env.MODE === 'development'

export default {
  defaultRouter: '/home',
  baseUrl: '/',
  env,
  development: isDevelopment
}
