<script setup lang="ts">
// import ToDoList from '@C/ToDoList.vue'
// import CollectionItem from '@/components/_collection/CollectionItem.vue'
import { PageLayout } from './layout'
import { useRoute } from 'vue-router'
const route = useRoute()
const title = ref('模板系统')
console.log(route.meta.pageTitle === 'string')
watch(route, (newVal) => {
  if (route.meta.pageTitle && typeof newVal.meta.pageTitle === 'string') {
    title.value = newVal.meta.pageTitle
  }
}, {
  immediate: true
})
</script>

<template>
  <PageLayout :title="title" no-side>
    <router-view></router-view>
  </PageLayout>
</template>

<style lang="scss">
@import './styles/Basic.scss';
</style>
