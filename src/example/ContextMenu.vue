<template>
  <FlexCard title="右键菜单">
    <div style="display: flex;justify-content: space-evenly;gap:40px;margin: 24px;align-items: center;">
      <div >
      <ContextMenu>
        <div class="example-menu"></div>
      </ContextMenu>
    </div>
    <ContextMenu2>
      <el-button class="example-button">点击后出菜单</el-button>
    </ContextMenu2>
    </div>
  </FlexCard>
</template>

<script lang="ts" setup>
import ContextMenu from '@/components/more-layer/context-menu/context-menu'
import ContextMenu2 from '@/components/more-layer/dropdown/dropdown'

</script>
<script lang="ts">
export default {
  name: 'PieChart',
}
</script>
<style scoped lang="scss">
.example-menu {
  background-color: rgb(215, 215, 215);
  border-radius: 16px;
  height: 320px;
  width: 320px;
  border: 3px dotted gray;
}

.example-button {}
</style>
