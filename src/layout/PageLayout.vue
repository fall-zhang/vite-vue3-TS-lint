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
      <el-aside class="aside" v-if="!noSide">
        <slot name="aside">
          <SideMenu></SideMenu>
        </slot>
      </el-aside>
      <el-main class="main">
        <slot>
          <router-view />
        </slot>
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
<script lang="ts" setup>
import SideMenu from '@/layout/SideMenu.vue'
// import { defineProps } from 'vue'
defineProps<{
  title?: string,
  noSide?: boolean,
  nohead?: boolean,
}>()
// const height = '200px'
</script>
<style lang="scss">
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 12px #bbb;

  .title {
    font-weight: 550;
    font-size: 32px;
    text-shadow: 1px 1px 12px #ddd;
  }
}

.container {
  height: calc(100vh - 60px - 30px);

  // background-color: aqua;
  .aside {
    background-color: #bbb;
  }

  .main {
    background-color: rgb(235, 235, 235);
  }
}

.footer {
  height: 24px;

  .copyright {
    line-height: 24px;
    font-size: 14px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
}
</style>
