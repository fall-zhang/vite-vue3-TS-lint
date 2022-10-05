<template>
  <el-card class="collection-item">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <el-button link @click="emit('onDetail')">
详情
</el-button>
      </div>
    </template>
    <div class="card-content">
      <slot></slot>
    </div>
    <template #footer>
      点击冲冲冲
    </template>
    <ul class="card-foot">
      <!-- {{ arguments }} -->
      <li v-for="(value,key) in arguments" :key="key">
        {{ key }}：<span v-if="value.required" class="red">必填</span>
        <span v-else class="gray">选填</span>
      </li>
    </ul>
  </el-card>
</template>

<script setup lang="ts">
// const props = 
defineProps<{
  title?: string,
  arguments: Record<string, any>
}>()
const emit = defineEmits<{
  (event: 'onDetail'): void
}>()
</script>

<style scoped lang="scss">
:deep(.el-card__body) {
  height: 80%;
  box-sizing: border-box;
  display: flex;
  // align-content: space-between;
  justify-content: space-between;
  flex-flow: column nowrap;
}

.card-header {
  display: flex;
  justify-content: space-between;

  span {
    font-size: 24px;
  }
}

.card-content {
  height: 80%;
  // background-color: aqua;
}

.card-foot {
  height: 60px;
  font-size: 12px;

  .red {
    color: rgb(168, 5, 5);
  }

  .gray {
    color: rgb(156, 156, 156);
  }
}

.el-card {
  margin: 8px;
}
</style>
