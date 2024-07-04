import { defineStore } from 'pinia'
import { UserState } from '@/stores/interface'
import piniaPersistConfig from '@/stores/plugin/persist'

export const useUserStore = defineStore({
  id: 'global-user',
  state: (): UserState => ({
    token: '',
    userInfo: { name: 'Geeker' }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    }
  },
  persist: piniaPersistConfig('geeker-user')
})
