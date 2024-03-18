<!-- 内容 Card -->
<template>
  <div class="content-card">
    <div class="title-zone" style="margin-bottom:6px;">
      <section v-if="title">
        <span style="font-size: 18px;font-weight: 550;">{{ title }}</span>
        <slot name="header-right"></slot>
      </section>
      <div class="title-options">
        <div v-for="item in options" :key="item" class="title-option-item" :class="currentOption === item && 'active'"
          @click="onClickOption(item)">{{ item }} </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  title: {
    require: true,
    default: '',
    type: String
  },
  options: {
    default: () => ([]),
    require: false,
    type: Array as PropType<Array<string>>
  }
})
const emit = defineEmits(['change'])
const currentOption = ref('')
onMounted(() => {
  currentOption.value = props.options[0]
})
function onClickOption(optionItem: string) {
  currentOption.value = optionItem
  emit('change', optionItem)
}
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

.title-zone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  width: 100%;
  margin-bottom: 6px;
  padding-left: 12px;
  z-index: 1;
  border-bottom: 1px solid #999;

  // padding-bottom: 6px;
  // border-bottom: 1px solid #acacac;
  // &.title-bar {
  border-left: 8px solid #0d867f;
  // }
}

.title-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-options {
  font-size: 14px;
  // flex: 1;
  font-weight: 400;
  display: flex;

  .title-option-item {
    cursor: pointer;
    box-sizing: border-box;
    padding: 8px 12px 8px;
    // margin: 4px;
    // border: 1px solid #999;
    // border-radius: 12px 12px 0 0;
    // border-bottom: none;

    &.active {
      position: relative;
      transform: translate(0, 1px);
      // background-color: #0d867f;
      // color: white;
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
