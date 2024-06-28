<!--
 |              | 图表1 |
 |    地图      |      |
————————————————————————————
| 图表2 | 图表3 | 图表4 | -->

<template>
  <FlexCard title="类型分析">
    <div ref="chartPieRef" class="chart-pie" style="height: 100%;width: 100%;flex: 1;"></div>
  </FlexCard>
</template>

<script lang="ts" setup>
import { init } from 'echarts'
// const echarts = () => { }
function getCharPie(receive: any) {
  let pieData = [
    { name: '一季度', value: 20 },
    { name: '二季度', value: 40 },
    { name: '三季度', value: 34 },
    { name: '四季度', value: 68 },
  ]
  const optionCover: Record<string, any> = {}
  if (receive) {
    pieData = receive
  } else {
    optionCover.title = {
      text: '暂无数据',
      top: 'center',
      left: 'center'
    }
  }
  const option = {
    color: ['#02a2d3', '#01c72c', '#f69b38', '#018dfd', '#fcb5ad', '#3b91d5', '#85daf6', '#4fa8a4', '#fccf54', '#9285eb'],
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    title: {
      left: 'center',
      top: 'center',
      textStyle: {
        rich: {
          text: {
            color: '#000',
            fontSize: 14,
            padding: [0, 0, 10, 0]
          },
          num: {
            color: '#000',
            fontSize: 32
          }
        }
      }
    },
    legend: {
      left: '68%',
      top: 'center',
      type: 'scroll',
      // orient: 'horizontal',
      orient: 'vertical',
      textStyle: {
        fontSize: 10
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['30%', '50%'],
        roseType: 'radius', // area
        data: pieData
      }
    ],
    ...optionCover
  }
  return option
}
const props = defineProps({
  data: {
    require: false,
    type: Array,
    default: () => ([])
  }
})
const chartPie = shallowRef()
const chartPieRef = ref()
const state = reactive({
  currentActive: '原值',
  // 资产净值
  pureType: [],
  // 资产原值
  originType: [],
})

onMounted(() => {
  initChart()
  handleValue()
})
function handleValue() {
  const originArr: Record<'name' | 'value', unknown>[] = []
  props.data.forEach(item => {
    originArr.push({
      name: '某种内容',
      value: 54,
    })
  })
  chartPie.value.clear()
  chartPie.value.setOption(getCharPie(originArr))
}
function initChart() {
  chartPie.value = init(chartPieRef.value)
}
</script>
<script lang="ts">
export default {
  name: 'PieChart',
}
</script>
<style scoped lang="scss">
.option-select {
  display: flex;
  margin-left: 10px;
  font-size: 14px;

  .select:first-child {
    border-radius: 4px 0 0 4px;
    border-left: 1px solid #afafaf;
  }

  .select:last-child {
    border-radius: 0 4px 4px 0;
  }

  .select {
    flex: 1;
    text-wrap: nowrap;
    text-align: center;
    padding: 2px 6px;
    border: 1px solid #afafaf;
    border-left: none;
    cursor: pointer;

    &.active {
      background-color: #028980;
      color: white;
    }
  }
}
</style>
