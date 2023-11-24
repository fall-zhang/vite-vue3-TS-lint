<template>
  <ul class="option-select">
    <li v-for="opt in option" :key="opt.value" class="select" :class="activeLabel === opt.label && 'active'"
      @click="activeLabel = opt.value">{{ opt.label }}</li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  option?: Record<'key' | 'value' | 'label', any>[]
}>()
const activeLabel = ref('')
</script>

<style lang="scss" scoped>
.option-select {
  display: flex;
  margin: 5px 8px 4px;
  gap: 4px;

  .select {
    flex: 1;
    border-radius: 4px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #d2ebea;
    cursor: pointer;

    &.active {
      background-color: #028980;
      color: white;
    }
  }
}
</style>
