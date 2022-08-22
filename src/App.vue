<template>
  <!-- <h1>每天进步一点点</h1> -->
  <!-- <ToDoList  /> -->
  <el-config-provider>
    <PageLayout title="模块查看系统">
      <template #header>
      </template>
      <router-view />
      <template #aside></template>
    </PageLayout>
  </el-config-provider>
</template>
<script lang="ts" setup>
import PageLayout from '@/layout/PageLayout.vue'
</script>
<style lang="scss" >
@import './styles/Basic.scss';
// .hiu {
//   opacity: 1;
// }
</style>
