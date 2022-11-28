<script setup lang="ts">
import CollectionItem from '@/components/_collection/CollectionItem.vue'
import { computed } from 'vue'
import type { ComponentInternalInstance } from 'vue'

const globPath = import.meta.glob('@C/**/*.vue')
// 除去所有带有 _ 的路径
const resolvePath = Object.keys(globPath).filter(path => !/\/_/.test(path))
const allComponents = resolvePath.map(item => globPath[item])

const buil = ref<Array<{ default: ComponentInternalInstance & { __name: string } }>>([])
onMounted(() => {
  const requestList = allComponents.map(item => item())
  Promise.all(requestList).then(res => {
    buil.value = res as Array<{ default: ComponentInternalInstance & { __name: string } }>
  })
})
const gridRowCount = computed(() => {
  return Math.ceil(9 / 4)
})
</script>

<template>
  <div class="collection">
    <CollectionItem v-for="(part, index) in buil" :title="part.default.__name" :key="index"
      :arguments="part.default.props">
      <Component :is="part.default" :count="99"></Component>
    </CollectionItem>
  </div>
</template>

<style lang="scss">
.collection {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 40vh;
  grid-template-rows: repeat(v-bind(gridRowCount), 1fr);
}
</style>

<script lang="ts">
export default { name: 'CollectionIndex' }
</script>
