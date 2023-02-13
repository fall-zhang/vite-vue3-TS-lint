<script setup lang="ts">
// import ToDoList from '@C/ToDoList.vue'
// import CollectionItem from '@/components/_collection/CollectionItem.vue'
import { PageLayout } from './layout'
import { useRoute } from 'vue-router'
import axios from 'axios'
axios.create({
  headers: ''
})
// axios.defaults.baseURL = 'http://localhost:9999'
axios.interceptors.request.use((config) => {
  config.headers!.token = '4jierdong'
  return config
})
// axios({
//   url: '/api/',
//   method: 'get'
// }).then(res => {
//   // console.log(res.data)
// })
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
    <!-- <router-view></router-view> -->
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </PageLayout>
</template>

<style lang="scss">

</style>
