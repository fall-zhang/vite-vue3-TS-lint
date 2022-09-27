<template>
  <div>
    <MultiContent />
  </div>
</template>

<script lang="ts" setup>
import shuff from '@/utils/shuffle'
import MultiContent from '@C/animation/MultiContent.vue'
shuff([2, 6, 47, 97, 4, 13])
</script>

<style scoped lang="scss">

</style>
<script lang="ts">
export default {
  name: 'HomePage',
  inheritAttrs: false
}
</script>