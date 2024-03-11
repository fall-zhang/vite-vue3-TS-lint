<!-- 内容 Card -->
<template>
  <div class="content-card">
    <div class="title-zone" style="margin-bottom:6px;">
      <section v-if="title" style="display: flex;justify-content: space-between;width: 100%;align-items: center;">
        <span style="font-size: 18px;font-weight: 550;">{{ title }}</span>
        <slot name="header-right"></slot>
      </section>
      <div class="title-options">
        <div v-for="item in options" :key="item" class="title-option" :class="currentOption === item && 'active'"
          @click="onClickOption(item)">{{ item }} </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    require: true,
    default: '',
    type: String
  },
  options: {
    default: () => ([]),
    require: false,
    type: Array
  }
})

defineEmits(['change'])
const currentOption = ref('')
onMounted(() => {
  currentOption.value = options[0]
})
function onClickOption(option) {
  currentOption.value = option
  $emit('change', option)
}
</script>

<style scoped lang="scss">
content-.ard- {
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

.title-zone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  margin-bottom: 6px;
  padding-left: 12px;
  z-index: 1;
  // padding-bottom: 6px;
  // border-bottom: 1px solid #acacac;

  // &.title-bar {
  border-left: 8px solid #0d867f;
  // }
}

.title-options {
  font-size: 14px;
  font-weight: 400;
  display: flex;

  .title-option {
    cursor: pointer;
    box-sizing: content-box;
    padding: 8px 12px 8px;
    // margin: 4px;
    // border: 1px solid #999;
    // border-radius: 12px 12px 0 0;
    // border-bottom: none;

    &.active {
      position: relative;
      transform: translate(0, 1px);
      box-sizing: border-box;
      border: 1px solid #999;
      border-radius: 8px 8px 0 0;
      z-index: 7;
      border-bottom: 1px solid white;
      margin-top: -2px;
    }
  }
}
</style>
