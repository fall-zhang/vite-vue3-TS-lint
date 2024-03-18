<!-- 内容 Card -->
<template>
  <div class="content-card">
    <FlexCard title="示例标题" :options="['巧克力', '奶茶', '香槟']">
      内容123
    </FlexCard>
  </div>
  <div class="content-card-two">
    <FlexCard title="示例标题" :options="['巧克力', '奶茶', '香槟']">
      内容223
    </FlexCard>
    <FlexCard title="示例标题" :options="['巧克力', '奶茶', '香槟']">
      内容647
    </FlexCard>
  </div>
</template>

<script setup lang="ts">
import FlexCard from '@/components/data-display/card/FlexCard.vue'
</script>

<style scoped lang="scss">
.content-card {
  flex: 1 0;
  display: flex;
  // height: auto;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;

  .card-content {
    display: flex;
    flex-direction: column;
  }
}

.content-card-two {
  display: flex;
  gap: 6px;
}
</style>
