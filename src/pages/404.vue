<template>
  <div>
    <el-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
      <template #extra>
        <el-button type="primary">Back</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

</style>
<script>
export default {
  name: 'RedirectPage404'
}
</script>