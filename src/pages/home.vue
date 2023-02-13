<template>
  <div>
    <h1>
      您还没有配置 home 页面
    </h1>
    <h2>
      您可以先跳转到
      <router-link to="/components">
        Components页面
      </router-link>
    </h2>
    <div style="position: relative;overflow: hidden;">
      <canvas ref="canvas" height="900" width="1960"></canvas>
      <div style="position: absolute;left: 40px;top: 40px;">
</div>
    </div>
  </div>
</template>
<!-- 给自己都不舍的买，还给别人买 -->
<!-- 电脑都舍得买，就是不舍得买新衣服 -->
<!-- 孩子可以跟你姓-->
<script lang="ts" setup>
const createCanvas = (canvas: HTMLCanvasElement, setting: any) => {
  if (!canvas) {
    throw new Error('请传入 DOM')
  }
  const config = {
    type: 'both', // both vertical
    padding: 40,
    reverse: false,
    ...setting
  }
  const stx = canvas.getContext('2d')!
  const { padding, reverse, type } = config
  if (['both', 'horizon'].includes(type)) {
    for (let i = 0; i < 100; i++) {
      const baseX = 20 * i + padding
      const baseY = padding || 0
      if (i % 2 === 0) {
        const numText = (i / 2).toString()
        const textX = baseX - 2 * numText.length
        const textY = padding - 25
        stx.fillText(numText, textX, textY)
        stx.fillRect(baseX, baseY, 1, -20)
      } else {
        stx.fillRect(baseX, baseY, 1, -15)
      }
      stx.fillRect(baseX + 4, baseY, 1, -10)
      stx.fillRect(baseX + 8, baseY, 1, -10)
      stx.fillRect(baseX + 12, baseY, 1, -10)
      stx.fillRect(baseX + 16, baseY, 1, -10)
    }
  }
  if (['both', 'vertical'].includes(type)) {
    for (let i = 0; i < 100; i++) {
      const baseX = 20 * i + padding
      const baseY = padding || 0
      if (i % 2 === 0) {
        const numText = (i / 2).toString()
        const textY = baseX + 5
        const textX = baseY - 30 - (numText.length - 1) * 4
        stx.fillText(numText, textX, textY)
        stx.fillRect(baseY, baseX, -20, 1)
      } else {
        stx.fillRect(baseY, baseX, -15, 1)
      }
      stx.fillRect(baseY, baseX + 4, -10, 1)
      stx.fillRect(baseY, baseX + 8, -10, 1)
      stx.fillRect(baseY, baseX + 12, -10, 1)
      stx.fillRect(baseY, baseX + 16, -10, 1)
    }
  }
}
const canvas = ref<HTMLCanvasElement>()
onMounted(() => {
  console.log(canvas)
  createCanvas(canvas.value!, {
    type: 'both', // both vertical horizon
    padding: 40,
    reverse: false
  })
})
</script>

<style scoped lang="scss">
h1 {
  font-size: 2rem;
}
</style>
<script lang="ts">
export default {
  name: 'HomePage',
  inheritAttrs: false
}
</script>