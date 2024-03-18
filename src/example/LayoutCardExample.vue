<template>
  <LayoutCard title="原来如此">
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
  </LayoutCard>
</template>

<script lang="ts" setup>
import FlexCard from '@/components/data-display/card/FlexCard.vue'
import LayoutCard from '@/components/data-display/card/LayoutCard.vue'
</script>
<script lang="ts">
export default {
  name: 'ExampleLayoutCard'
}
</script>
<style scoped lang="scss">
.card-layout {
  flex: 1 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0px 12px;
  border-radius: 6px;
  height: 60%;

  .card-content {
    display: flex;
    flex-direction: column;
  }
}

.title-zone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  &.title-bar {
    border-left: 8px solid #0d867f;
  }

  .title {
    font-size: 18px;
    font-weight: 550;
  }
}
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
</style>
