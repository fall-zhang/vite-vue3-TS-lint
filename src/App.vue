<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useRoute } from 'vue-router'
const language = ref(zhCn)

const route = useRoute()

const title = ref('模板系统')
watch(route, (newVal) => {
  if (route.meta.pageTitle && typeof newVal.meta.pageTitle === 'string') {
    title.value = newVal.meta.pageTitle
  }
}, {
  immediate: true
})

</script>

<template>
  <el-config-provider :locale="language">
    <router-view #="{ Component }">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </router-view>
  </el-config-provider>
</template>

<style lang="scss"></style>
