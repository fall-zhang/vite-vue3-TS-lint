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
    <div class="card-body">
      <div class="card-content">
        <slot></slot>
      </div>
      <ul class="card-foot">
        <li v-for="(key, value) in arguments" :key="key">
          {{ value }}：<span v-if="key" class="red">必填</span>
          <span v-else class="gray">选填</span>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script setup lang="ts">
defineProps<{
  title?: string,
  arguments: Record<string, any>
}>()
const emit = defineEmits<{
  (event: 'onDetail'): void
}>()
</script>

<style scoped lang="scss">
.el-card {
  margin: 8px;

}

.collection-item {
  min-height: 28vh;
  max-height: 50vh;

  .card-header {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
  }

  .card-body {
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .card-content {
      min-height: 120px;
      overflow: auto;
    }

    .card-foot {
      height: 56px;
      margin: 8px 0;
      font-size: 12px;
    }
  }


  .red {
    color: rgb(168, 5, 5);
  }
}



.red {
  color: rgb(168, 5, 5);
}
</style>
