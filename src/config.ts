const env = import.meta.env
export const isDevelopment = env.MODE === 'development'

export default {
  defaultRouter: '/home',
  baseUrl: '/api',
  env,
  development: isDevelopment
}
