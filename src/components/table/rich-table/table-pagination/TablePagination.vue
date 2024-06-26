<!-- 筛选功能 -->
<template>
  <div class="pagination-box">
    <el-pagination size="small" background layout="prev, pager, next" :total="50" class="mt-4" />

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  total: {
    require: true,
    default: 20,
    type: Number
  },
  // 单个页面的大小
  pageCount: {
    require: true,
    default: 10,
    type: Number
  },
  pageSizes: {
    require: true,
    default: () => [10, 20, 30, 40, 50, 100],
    type: Array
  },
})
</script>

<style scoped lang="scss">
.pagination-box {
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
}
</style>
