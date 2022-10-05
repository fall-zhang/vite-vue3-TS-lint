<template>
  <div>
    果断就会摆个
    {{ title }}
    猜大小：{{ props.count }} 很 {{ exporse }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  count: number
}>()
const exporse = ref('小')
if (props.count > 10) {
  exporse.value = '大'
}
defineExpose({
  exporse
})
</script>

<style scoped lang="scss">

</style>
