<script setup lang="ts">
// import ToDoList from '@C/ToDoList.vue'
// import CollectionItem from '@/components/_collection/CollectionItem.vue'
import { PageLayout } from './layout'
import { useRoute } from 'vue-router'
const route = useRoute()
const title = ref('模板系统')
if (route.meta.pageTitle && typeof route.meta.pageTitle === 'string') {
  title.value = route.meta.pageTitle
}
</script>

<template>
  <PageLayout :title="title" no-side>
    <router-view></router-view>
  </PageLayout>
</template>

<style lang="scss">
@import './styles/Basic.scss';
</style>
