<!-- chart 中的数据可以编辑 -->

<template>
  <div>
    <div ref="chartRef" style="height: 400;width: 600;;"></div>
  </div>
</template>

<script lang="ts" setup>
import { templateRef } from '@vueuse/core'
import { EChartsType, init } from 'echarts'

const leftChart = shallowRef<EChartsType>()
const chartRef = templateRef('chartRef')
const revisedData = ref<Array<[number, number]>>([])
const revisedDataCopy = ref<Array<[number, number]>>([])
onMounted(() => {
  leftChart.value = init(chartRef.value)
  leftChart.value.getZr().on('mousedown', handleMouseDown)
  leftChart.value.getZr().on('mousemove', mousemoveChart)
  leftChart.value.getZr().on('mouseup', handleMouseUp)
  leftChart.value.getZr().on('globalout', handleMouseUp)
})
onUnmounted(() => {

})
const seriesData = [
  ['00:15', 134],
  ['00:30', 43],
  ['00:45', 254],
  ['01:00', 565],
  ['01:15', 35],
  ['01:30', 786],
  ['01:45', 89],
  ['02:00', 177],
  ['02:15', 52],
  ['02:30', 25],
  ['02:45', 10],
  ['03:00', 145],
  ['03:15', 366],
  ['03:30', 70],
  ['03:45', 20],
  ['04:00', 80]
]
const xData = [
  '00:15',
  '00:30',
  '00:45',
  '01:00',
  '01:15',
  '01:30',
  '01:45',
  '02:00',
  '02:15',
  '02:30',
  '02:45',
  '03:00',
  '03:15',
  '03:30',
  '03:45',
  '04:00'
]
const symbolSize = 14

const option = {
  title: {
    text: '时间范围',
    x: 'left',
    textStyle: {
      color: '#000',
      fontWeight: 'lighter',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '6%',
    containLabel: true
  },
  legend: {
    itemWidth: 6,
    itemHeight: 6,
    itemGap: 30,
    textStyle: {
      color: '#fff',
      fontSize: 16,
      lineHight: 16
    }
  },
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: 14,
      formatter: function (params) {
        let newParamsName = ''
        const paramsNameNumber = params.length
        const provideNumber = 8
        const rowNumber = Math.ceil(paramsNameNumber / provideNumber)

        if (paramsNameNumber > provideNumber) {
          for (let p = 0; p < rowNumber; p++) {
            let tempStr = ''
            const start = p * provideNumber
            const end = start + provideNumber

            if (p == rowNumber - 1) {
              tempStr = params.substring(start, paramsNameNumber)
            } else {
              tempStr = params.substring(start, end) + '\n'
            }
            newParamsName += tempStr
          }
        } else {
          newParamsName = params
        }

        return newParamsName
      }
    },
    data: xData
  },
  yAxis: [
    {
      name: '单位：kW',
      type: 'value',

      axisLabel: {
        color: '#fff',
        fontSize: 14
      },
      axisLine: {
        show: true
      }
    }
  ],
  series: [
    {
      id: 'b',
      name: '参考线1',
      type: 'line',
      smooth: true,
      data: [
        144, 53, 258, 545, 38, 725, 99, 167, 72, 65, 18, 175, 346, 30, 70, 60
      ],
      lineStyle: {
        color: '#0ff'
      },
      itemStyle: {
        color: '#0ff'
      }
    },
    {
      id: 'a',
      name: '曲线修正',
      type: 'line',
      smooth: true,
      symbol: 'emptyCircle',
      symbolSize: symbolSize,
      data: seriesData,
      lineStyle: {
        color: '#f00'
      },
      itemStyle: {
        color: '#f00'
      }
    }
  ]
}

function roundToDecimalPlace(number: number, decimalPlaces: number) {
  const factor = Math.pow(10, decimalPlaces)
  return Math.round(number * factor) / factor
}
const timberReady = ref(true)
const timber = ref<NodeJS.Timeout>()
const clickState = ref(false)
function mousemoveChart(e: any) {
  if (clickState.value) {
    const [xAxisValue, yAxisValue] = leftChart.value?.convertFromPixel('grid', [
      e.event.offsetX,
      e.event.offsetY
    ]) || []

    if (xAxisValue < 0 || isNaN(xAxisValue)) return
    try {
      const newData = roundToDecimalPlace(yAxisValue, 2)
      revisedData.value[xAxisValue][1] = newData
      revisedDataCopy.value[xAxisValue][1] = newData
      if (timberReady.value) {
        timberReady.value = false
      }
    } catch (error) {
      console.log(revisedData.value[xAxisValue])
    }
    if (!timber.value) {
      timber.value = setTimeout(() => {
        timber.value = undefined
        timberReady.value = true
        leftChart.value?.setOption({
          series: [
            {
              id: 'a',
              data: revisedData.value
            }
          ]
        })
      }, 60)
    }
  }
}
function handleMouseDown() {
  clickState.value = true
}
function handleMouseUp() {
  clickState.value = false
}
leftChart.value?.setOption(option)
</script>

<style lang="scss" scoped></style>