<template>
  <!-- <h1>每天进步一点点</h1> -->
  <!-- <ToDoList  /> -->
  <PageLayout title="模块查看系统">
    <template #header>
    </template>
    都是借口
    <template v-if="true">
      <div class="hiu">
        人生就是这样{{ dl }}
      </div>
    </template>
    <template #aside></template>
  </PageLayout>
</template>
<script lang="ts" setup>
import PageLayout from '@/layout/PageLayout.vue'
// eslint-disable-next-line no-undef
const dl = ref(123)
</script>
<style lang="scss" >
@import './styles/Basic.scss';
// .hiu {
//   opacity: 1;
// }
</style>
