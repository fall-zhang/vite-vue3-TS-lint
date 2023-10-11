<!--
  可以通过拖拽改变宽度的容器
 -->

<template>
  <div ref="container" class="adjustment" style="width: 120px;" :class="$attrs.class">
    <slot></slot>
  </div>
  <div class="auto-size-container" @mousedown.left="onMouseDown">
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { addListener } from '@/utils/utils.js'
const props = defineProps({
  max: {
    default: 260,
    require: false,
    type: [String, Number]
  },
  showClose: {
    default: false,
    require: false,
    type: Boolean
  }
})
const originPosition = reactive({
  left: 0,
  origin: 120
})
const onShow = ref(false)
onMounted(() => {
})
const container = ref(null)
function onMouseDown(ev) {
  onShow.value = true
  console.log(ev.clientX)
  originPosition.left = ev.clientX
  const listener = addListener(document, 'mousemove', (ev) => {
    const movingDistance = ev.clientX - originPosition.left
    container.value.style.width = originPosition.origin + movingDistance + 'px'
  })
  const listener2 = addListener(window, 'mouseup', (ev) => {
    const movingDistance = ev.clientX - originPosition.left
    container.value.style.width = originPosition.origin + movingDistance + 'px'
    originPosition.origin = originPosition.origin + movingDistance
    onShow.value = false
    listener()
    listener2()
  })
}
</script>

<style scoped lang="scss">
.adjustment {
  box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
}

.auto-size-container {
  resize: vertical;
  width: 1px;
  border-left: 2px solid transparent;
  border-right: 1px solid transparent;
  cursor: col-resize;
  // box-sizing: content-box;
  margin: 0 1px;
  background-color: #c1c1c1;
}

.modal {
  // display: block;
  pointer-events: none;
  cursor: col-resize;
  background-color: #84ff8d;
  height: 100vh;
  // width: 100vw;
  // position: fixed;
  border: none;
  left: 0;
  top: 0;
}
</style>
