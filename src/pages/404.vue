<template>
  <div>
    <el-result icon="error" title="Error 404" sub-title="您请求的页面不存在">
      <template #extra>
        <router-link to="/">
          <el-button type="primary">
            返回首页
          </el-button>
        </router-link>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
a {
  text-decoration: none
}
</style>
<script>
export default {
  name: 'RedirectPage404'
}
</script>