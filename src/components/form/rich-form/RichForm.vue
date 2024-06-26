<!-- 将通过自定义生成的 Form 转换为表格 -->
<template>
  <div class="port-list">

  </div>
</template>

<script setup lang="ts">
const formOptionList = [
  {
    label: '姓名',
    prop: '',
    setters: ['input'],
    default: ''
  }
]

</script>

<style scoped lang="scss">
.port-list {
  // margin-left: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;

}

.lightButton {
  white-space: nowrap;
  font-weight: 550;
  box-sizing: border-box;
  outline: 0;
  text-align: center;
  color: #399c96;
}

.show-list {
  display: flex;
  border-radius: 4px;
  margin-bottom: 8px;

  .show-list-info {
    flex: 1 0 180px;
  }

  .show-list-opt {
    position: sticky;
    width: 80px;
    bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

.show-list-info {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(121, 121, 121, 0.1);
  border-radius: 6px;
  padding: 8px 8px 8px 0;
  margin-right: 12px;

}
</style>
