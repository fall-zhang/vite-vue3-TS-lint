<template>
  <div class="circle-select-container">
    <div v-for="item in radioList" :key="item" class="circle-item"
      :class="currentSelect === item ? 'circle-select' : ''" @click="onClickRadio(item)"></div>
  </div>
</template>

<script lang="tsx" setup>
const currentSelect = ref('')
const radioList = ref<string[]>(['pic1', 'pic2', 'pic3', 'pic4', 'pic5',])
onMounted(() => {
  if (radioList.value.length > 0) {
    currentSelect.value = radioList.value.at(0)!
  }
})
function onClickRadio(newVal: string) {
  currentSelect.value = newVal
}
// const props = defineProps({
// })
</script>

<style scoped lang="scss">
.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px;

  .drawer-footer {
    display: flex;
    justify-content: flex-end;
    // gap: 20px;
    width: 100%;
  }
}
</style>
<script lang="tsx">
export default {
  name: 'InlineRadio'
}
</script>
<style lang="scss">
.circle-select-container {
  padding: 4px 8px;
  box-sizing: border-box;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 8s;

  .circle-item {
    cursor: pointer;
    margin: 0 6px;
    height: 12px;
    width: 12px;
    border: 1px solid #000000;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    &.circle-select {
      background-color: #000000;
    }
  }
}
</style>