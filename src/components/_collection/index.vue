<script setup lang="ts">
import CollectionItem from '@/components/_collection/CollectionItem.vue'
import { computed } from 'vue'
const gridRowCount = computed(() => {
  return Math.ceil(9 / 3)
})
</script>

<template>
  <div class="collection">
    <CollectionItem v-for="item in 4" title="模块查看系统" :key="item" :arguments="{ name: true }">
      <h1>
        难难啊难,这里面放置组件
      </h1>
    </CollectionItem>
    <CollectionItem v-for="item in 2" title="模块查看系统" :key="item" :arguments="{ name: true }">
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
      <h1>
        难难啊难,这里面放置组件
      </h1>
    </CollectionItem>
  </div>
</template>

<style lang="scss">
.collection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 40vh;
  grid-template-rows: repeat(v-bind(gridRowCount), 1fr);
}
</style>

<script lang="ts">
export default { name: 'CollectionIndex' }
</script>
