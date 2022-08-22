<script setup lang="ts">
import PageLayout from '@/layout/PageLayout.vue'
import CollectionItem from '@/components/_collection/CollectionItem.vue'
import { computed } from 'vue'
const gridRowCount = computed(() => {
  return Math.ceil(9 / 3)
})
</script>

<template>
  <!-- <h1>每天进步一点点</h1> -->
  <!-- <ToDoList  /> -->
  <PageLayout title="模块查看系统" no-side>
    <div class="collection">
      <CollectionItem v-for="item in 9" :key="item">
        <div style="font-size: 46px">难难啊难</div>
      </CollectionItem>
    </div>
  </PageLayout>
</template>

<style lang="scss">
.collection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 40vh;
  grid-template-rows: repeat(v-bind(gridRowCount), 1fr);
}
</style>
<script>
export default {
  name: 'CollectionIndex'
}
</script>
