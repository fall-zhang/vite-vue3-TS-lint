<!-- 滑动验证码 -->
<template>
  <div style="margin-top: 120px;">
    请完成安全验证
    <div>
      <!-- 验证的图片 -->
      <img src="" alt="">
    </div>
    <!-- 拖动的图片 -->
    <div ref="containerBlock" class="slide-zone">
      <!-- 图片的遮罩 -->
      <div class="image-mask">
        <PuzzleIcon style="width: 80px;height: 80px;position:absolute" :style="{
          left: `${imageMaskPosition.x}px`,
          bottom: imageMaskPosition.y + 'px',
        }"></PuzzleIcon>
      </div>
      <div ref="slideBlock" class="slide-block" @mousedown="onMouseDown">
        <PuzzleIcon style="width: 80px;height: 80px;position: absolute;" :style="{
          bottom: imageMaskPosition.y + 'px',
        }"></PuzzleIcon>
        <img src="" alt="">
      </div>
      <div class="tip-text"> 向右侧拖动滑块 </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  img: {
    require: false,
    type: [String, File, Blob],
    default: ''
  }
})
const slideBlock = ref()
const containerBlock = ref()

const imageMaskPosition = ref({
  x: 164,
  y: 68
})
const slideBlockInfo = ref({
  height: 0,
  width: 0
})
const slideBlockContainerInfo = ref({
  height: 0,
  width: 0
})

const startPosition = ref({
  x: 0,
  y: 0
})

const targetPosition = ref({
  x: 0,
  y: 0
})

function onMouseDown(ev: MouseEvent) {
  console.log('🚀 ~ onMouseDown ~ ev:', ev)
  slideBlock.value.style.transition = `none`
  startPosition.value = {
    x: ev.pageX,
    y: ev.pageY
  }
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('mousemove', onMouseMove)
}

function onMouseMove(ev: MouseEvent) {
  // console.log('🚀 ~ onMouseUp ~ ev:', ev)
  targetPosition.value = {
    x: ev.pageX,
    y: ev.pageY
  }
  let movePx = targetPosition.value.x - startPosition.value.x
  if (movePx < 0) {
    movePx = 0
  } else if (movePx + slideBlockInfo.value.width > slideBlockContainerInfo.value.width) {
    movePx = slideBlockContainerInfo.value.width - slideBlockInfo.value.width
  }
  console.log('🚀 ~ onMouseMove ~ movePx:', movePx)
  slideBlock.value.style.transform = `translate(${movePx}px,0px)`
}

function onMouseUp(ev: MouseEvent) {
  // console.log('🚀 ~ onMouseUp ~ ev:', ev)
  targetPosition.value = {
    x: ev.pageX,
    y: ev.pageY
  }
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mousemove', onMouseMove)
  const passState = false
  if (passState) {
    // 通过--- 误差在三个像素内
  } else {
    // 初始化
    slideBlock.value.style.transition = `.6s`
    slideBlock.value.style.transform = `translate(0px,0px)`
    // 提示验证失败
  }
}
function genPuzzlePosition() {

}
onMounted(() => {
  // get
  const blockStyle = getComputedStyle(slideBlock.value)
  slideBlockInfo.value = {
    width: parseInt(blockStyle.width),
    height: parseInt(blockStyle.height)
  }
  const containerStyle = getComputedStyle(containerBlock.value)
  slideBlockContainerInfo.value = {
    width: parseInt(containerStyle.width),
    height: parseInt(containerStyle.height)
  }
  if (slideBlock.value) {
    // slideBlock.value?.addEventListener
    // console.log("🚀 ~ onMounted ~ slideBlock.value:", slideBlock.value)
  }
})
</script>

<style scoped lang="scss">
.slide-zone {
  position: relative;
  height: 46px;
  width: 100%;
  border: 1px solid #acaeae;
  border-radius: 4px;
  display: flex;

  .tip-text {
    margin-left: 80px;
  }

  .image-mask {
    background-color: #fafafad4;
  }

  .slide-block {
    cursor: pointer;
    background-color: #969697;
    height: 44px;
    width: 62px;
  }
}
</style>
