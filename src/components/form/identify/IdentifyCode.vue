<!-- 图形验证码 -->
<template>
  <!-- 画布，绑定一个点击事件，用于刷新验证码 -->
  <canvas class="img-verify" ref="verify" :width="state.width" :height="state.height" @click="reDrawCode"></canvas>
</template>
<script setup>
import { reactive, onMounted, ref, toRefs } from 'vue'
const props = defineProps({
  modelValue: {
    require: false,
    default: '',
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
const verify = ref(null)

const state = reactive({
  str: 'AaBbCcDdEeFfGgHhJjKLMmNnPpQRrSsTtUuVvWwXxYyZ23456789', // 字符串
  width: 110,
  height: 40,
  imgCode: '' // 初始化验证码为空
})
onMounted(() => {
  if (verify.value) {
    // 初始化绘制图片验证码
    state.imgCode = draw()
    emit('update:modelValue', state.imgCode)
  }
})

// 点击图片重新绘制
const reDrawCode = () => {
  state.imgCode = draw()
  emit('update:modelValue', state.imgCode)
}

// 随机数
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// 随机颜色
const randomColor = (min, max) => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return `rgb(${r},${g},${b})`
}

// 定义一个绘制验证码的函数 draw
const draw = () => {
  // 获取 canvas 上下文，用于绘图
  const ctx = verify.value.getContext('2d')

  // 生成背景颜色，设置为浅色调（RGB范围在200-230之间）
  ctx.fillStyle = randomColor(200, 230)

  // 填充整个 canvas 背景区域
  ctx.fillRect(0, 0, state.width, state.height)

  // 初始化验证码字符串变量 imgCode
  let imgCode = ''

  // 遍历4次以绘制4个随机字符
  for (let i = 0; i < 4; i++) {
    // 随机选取字符集中的一个字符
    const strLength = state.str.length
    const text = state.str[randomNum(0, strLength)]

    // 将该字符添加到验证码字符串中
    imgCode += text

    // 设置随机字体大小（18px - 40px）
    const fontSize = randomNum(18, 40)

    // 设置随机旋转角度（-30度至30度）
    const deg = randomNum(-30, 30)

    // 设置字体样式、大小和颜色
    ctx.font = `${fontSize}px Simhei`
    ctx.textBaseline = 'top'
    ctx.fillStyle = randomColor(80, 150)

    // 保存当前画布状态，以便进行平移、旋转等操作而不影响后续绘制
    ctx.save()

    // 对每个字符进行坐标平移，并根据旋转角度进行旋转
    ctx.translate(30 * i + 15, 15)
    ctx.rotate((deg * Math.PI) / 180)

    // 在当前位置绘制填充的文本（偏移量防止超出边框）
    ctx.fillText(text, -15 + 5, -15)

    // 恢复之前保存的画布状态，撤销平移和旋转
    ctx.restore()
  }

  // 绘制 5 条随机干扰线，颜色设置为较浅色系
  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height))
    ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height))
    ctx.strokeStyle = randomColor(180, 230)
    ctx.closePath() // 这一行实际上在绘制直线时是可选的
    ctx.stroke() // 实际上绘制出干扰线
  }

  // 绘制40个随机位置的小圆点作为干扰元素，颜色同样设置为较浅色系
  for (let i = 0; i < 40; i++) {
    ctx.beginPath()
    // 创建一个圆形路径，指定圆心坐标与半径
    ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI)
    ctx.closePath() // 同样，在绘制封闭图形如圆时是可选的

    // 设置小圆点的颜色
    ctx.fillStyle = randomColor(150, 200)

    // 填充该圆形路径，形成实心小圆点
    ctx.fill()
  }

  // 返回生成的验证码字符串
  return imgCode
}

defineExpose({
  ...toRefs(state), // toRefs 为了防止结构数据丢失响应性
  verify,
  reDrawCode
})

</script>
<style scoped>
/* 设置鼠标悬停样式 */
.img-verify {
  cursor: pointer;
}
</style>
