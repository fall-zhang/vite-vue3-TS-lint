<script setup lang="ts">
import { useRoute } from 'vue-router'
import { isDevelopment } from '@/config'
import { exampleRoutes } from '@/router/exampleRouter'
const exampleMenuList = ref<any[]>([])
if (isDevelopment) {
  exampleMenuList.value = exampleRoutes.slice()
  // console.log('🚀 ~ exampleMenuList:', exampleMenuList)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const route = useRoute()

const title = ref('应用示例')
watch(route, (newVal) => {
  if (route.meta.pageTitle && typeof newVal.meta.pageTitle === 'string') {
    title.value = newVal.meta.pageTitle
  }
}, {
  immediate: true
})

</script>

<template>
  <el-container>
    <el-header class="header">
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
        <div></div>
      </slot>
    </el-header>
    <el-container class="container">
      <el-aside class="aside">
        <el-menu default-active="2" class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose">
          <el-menu-item v-for="menuItem in exampleMenuList" :key="menuItem.name" :index="menuItem.path">
            <span>{{ menuItem.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
    <el-footer class="footer">
      <slot name="footer">
        <div class="copyright">
          <span>Fall Zhang All Right Reserve</span>
        </div>
      </slot>
    </el-footer>
  </el-container>

</template>

<style lang="scss"></style>
