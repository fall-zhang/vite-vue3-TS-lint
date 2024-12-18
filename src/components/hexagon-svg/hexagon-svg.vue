<!-- 使用 form 控制六边形 -->

<template>
  <div style="display: flex;justify-content: space-between;">
    <el-form label-width="40px" size="small">
      <el-form-item v-for="(item, index) in stats" :key="index" :label="item.label">
        <el-input v-model="item.value" type="number" style="width:80px" :min="0" :max="100"></el-input>
      </el-form-item>
    </el-form>
    <svg width="200" height="200">
      <g>
        <polygon :points="pointsStr"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <g v-for="(stat, index) in stats" :key="index">
          <text :x="points[index].x" :y="points[index].y">
            {{ stat.label }}
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { valueToPoint } from './util'
const stats = reactive([
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
])

// console.log(...toRefs(stats))

const pointsStr = computed(() => {
  const total = stats.length
  return stats
    .map((stat, i) => {
      const { x, y } = valueToPoint(stat.value, i, total)
      return `${x},${y}`
    })
    .join(' ')
})
const points = computed(() => {
  const total = stats.length
  return stats
    .map((stat, i) => {
      const { x, y } = valueToPoint(stat.value, i, total)
      return { x, y }
    })
})
</script>

<style scoped lang="scss">
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 0;
  left: 300px;
}
</style>
