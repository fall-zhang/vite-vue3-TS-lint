<!-- 百分比进度条 -->

<template>
  <div class="line-container">
    <div class="line-top-text">
      <span>未消除 {{ value || 0 }} </span>
      <span>总数 {{ total || 0 }} </span>
    </div>
    <div class="current-line">
      <div :style="{ width: percentage }" class="line-inner"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  total: {
    require: true,
    default: 0,
    type: Number
  },
  value: {
    require: true,
    default: 0,
    type: Number
  },
  color: {
    require: true,
    default: '',
    type: String
  },
  backgroundColor: {
    require: true,
    default: '',
    type: String
  }
})
const percentage = computed(() => {
  let result = 0
  const { total, value } = props
  if (total > value) {
    result = Number((props.value / props.total).toFixed(2))
  }
  return result
})
</script>

<style scoped lang="scss">
.line-container {
  flex-direction: column;
  justify-content: space-evenly;
}

.current-line {
  height: 7px;
  width: 100%;
  background-color: #f6e5e5;
  position: relative;

  .line-inner {
    height: 7px;
    background-color: #ff413d;
    position: relative;
  }
}

@media screen and (min-width: 1680px) {
  .big-image {
    height: 32px;
    width: 32px;
    border-radius: 4px;
    padding: 3px;
  }
}

@media screen and (max-width: 1680px) {
  .big-image {
    height: 24px;
    width: 24px;
    border-radius: 4px;
    padding: 3px;
  }
}
</style>
