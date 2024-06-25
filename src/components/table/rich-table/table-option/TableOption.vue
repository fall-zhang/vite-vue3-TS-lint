<!-- 表格中的每一种自定义列的方式 -->
<template>
  <div style="width:100%;height: 420px;overflow: auto;">
    <div ref="docDomRef" style="transform: scale(1);transform-origin: center 0;"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  filterOptions: {
    require: false,
    type: [Array],
    default: () => []
  }
})
const docDomRef = ref<HTMLDivElement>()

</script>

<style scoped lang="scss"></style>
