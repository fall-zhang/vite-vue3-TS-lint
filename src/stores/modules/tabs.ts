import router from '@/router'
import { defineStore } from 'pinia'
import { useKeepAliveStore } from './keepAlive'
import { TabsState, TabsMenuProps } from '@/stores/types/index'
import piniaPersistConfig from '@/stores/plugin/persist'

const keepAliveStore = useKeepAliveStore()

export const useTabsStore = defineStore('geeker-tabs',{
  state: (): TabsState => ({
    tabsMenuList: []
  }),
  actions: {
    addTabs(tabItem: TabsMenuProps) {
      if (this.tabsMenuList.every(item => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem)
      }
      // add keepalive
      if (!keepAliveStore.keepAliveName.includes(tabItem.name) && tabItem.isKeepAlive) {
        keepAliveStore.addKeepAliveName(tabItem.path)
      }
    },
    removeTabs(tabPath: string, isCurrent: boolean = true) {
      if (isCurrent) {
        this.tabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return
          const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1]
          if (!nextTab) return
          router.push(nextTab.path)
        })
      }
      // remove keepalive
      const tabItem = this.tabsMenuList.find(item => item.path === tabPath)
      tabItem?.isKeepAlive && keepAliveStore.removeKeepAliveName(tabItem.path)
      // set tabs
      this.tabsMenuList = this.tabsMenuList.filter(item => item.path !== tabPath)
    },
    closeTabsOnSide(path: string, type: 'left' | 'right') {
      const currentIndex = this.tabsMenuList.findIndex(item => item.path === path)
      if (currentIndex !== -1) {
        const range = type === 'left' ? [0, currentIndex] : [currentIndex + 1, this.tabsMenuList.length]
        this.tabsMenuList = this.tabsMenuList.filter((item, index) => {
          return index < range[0] || index >= range[1] || !item.close
        })
      }
      // set keepalive
      const KeepAliveList = this.tabsMenuList.filter(item => item.isKeepAlive)
      keepAliveStore.setKeepAliveName(KeepAliveList.map(item => item.path))
    },
    closeMultipleTab(tabsMenuValue?: string) {
      this.tabsMenuList = this.tabsMenuList.filter(item => {
        return item.path === tabsMenuValue || !item.close
      })
      // set keepalive
      const KeepAliveList = this.tabsMenuList.filter(item => item.isKeepAlive)
      keepAliveStore.setKeepAliveName(KeepAliveList.map(item => item.path))
    },
    setTabs(tabsMenuList: TabsMenuProps[]) {
      this.tabsMenuList = tabsMenuList
    },
    setTabsTitle(title: string) {
      this.tabsMenuList.forEach(item => {
        if (item.path == location.hash.substring(1)) item.title = title
      })
    }
  },
  persist: piniaPersistConfig('geeker-tabs')
})
