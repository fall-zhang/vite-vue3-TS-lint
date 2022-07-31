<script setup lang="ts">
// import ToDoList from '@C/ToDoList.vue'
import PageLayout from '@/layout/PageLayout.vue'
</script>

<template>
  <!-- <h1>每天进步一点点</h1> -->
  <!-- <ToDoList  /> -->
  <PageLayout>
    <template #header>
    </template>
    都是借口
    <template v-if="true">
      <div class="hiu">
        人生就是这样
      </div>
    </template>
    <template #aside></template>
  </PageLayout>
</template>

<style lang="scss" >
@import './styles/Basic.scss';

// .hiu {
//   opacity: 1;
// }
</style>
