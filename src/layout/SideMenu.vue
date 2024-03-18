<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose">
    <!-- <el-sub-menu index="1">
      <template #title>
        <span>Navigator One</span>
      </template>
<el-menu-item-group title="Group One">
  <el-menu-item index="1-1">
    item one
  </el-menu-item>
  <el-menu-item index="1-2">
    item two
  </el-menu-item>
</el-menu-item-group>
<el-menu-item-group title="Group Two">
  <el-menu-item index="1-3">
    item three
  </el-menu-item>
</el-menu-item-group>
<el-sub-menu index="1-4">
  <template #title>
          item four
        </template>
  <el-menu-item index="1-4-1">
    item one
  </el-menu-item>
</el-sub-menu>
</el-sub-menu> -->
    <el-menu-item v-for="menuItem in exampleMenuList" :key="menuItem.name" :index="menuItem.path">
      <span>{{ menuItem.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { isDevelopment } from '@/config'
import { exampleRoutes } from '@/router/exampleRouter'
// const exampleRoutes =
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
</script>
