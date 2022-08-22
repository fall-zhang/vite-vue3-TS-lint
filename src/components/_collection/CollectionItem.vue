<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <el-button link>详情</el-button>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;

  span {
    font-size: 24px;
  }
}

.el-card {
  margin: 12px;
}
</style>
