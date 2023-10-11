<template>
  <div>
    请不要
    {{ title }}
    猜大小：{{ props.count }} 很 {{ exporse }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  count?: number
}>()
const exporse = ref('小')
defineExpose({
  exporse
})
</script>

<style scoped lang="scss">

</style>
