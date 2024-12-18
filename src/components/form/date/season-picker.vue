<template>
  <!-- 季度选择时间控件 -->
  <div class="wrapper_picker">
    <span>
      <!-- 生成一个点用于控制季度时间弹窗消失 -->
      <span style="position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;"
        v-show="showSeason" @click.stop="showSeason = false"></span>
      <el-input placeholder="选择季度" v-model="showValue" style="width:100%;" clearable @focus="showSeason = true">
        <template v-slot:prefix>
          <i class="el-input__icon el-icon-date"></i>
        </template>
      </el-input>
      <el-card class="box-card" style="width:322px;padding: 0 3px 20px;margin-top:10px;position:fixed;z-index:9999"
        v-show="showSeason">
        <template v-slot:header>
          <div class="firstBtn">
            <button type="button" aria-label="前一年"
              class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left" @click="prev"></button>
            <span role="button" class="el-date-picker__header-label">{{ year }}年</span>
            <button type="button" aria-label="后一年" @click="next"
              class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"></button>
          </div>
        </template>
        <div class="text container">
          <!-- 如下，绑定class,disabled为禁止选择的时间的设置 -->
          <el-button type="text" size="medium" style="width:47%;color: #606266;float:left;"
            @click="selectSeason(0)">第一季度</el-button>
          <el-button type="text" size="medium" style="float:right;width:47%;color: #606266;"
            @click="selectSeason(1)">第二季度</el-button>
        </div>
        <div class="item container" style="text-align:center;">
          <el-button type="text" size="medium" style="width:47%;color: #606266;float:left;"
            @click="selectSeason(2)">第三季度</el-button>
          <el-button type="text" size="medium" style="float:right;width:47%;color: #606266;"
            @click="selectSeason(3)">第四季度</el-button>
        </div>
      </el-card>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    valueArr: {
      default: () => {
        return ['01-03', '04-06', '07-09', '10-12']
      },
      type: Array
    },
    getValue: {
      default: val => {
        return val
      },
      type: Function
    }
  },
  data() {
    return {
      showSeason: false,
      season: '',
      year: new Date().getFullYear(), // input显示时间，会随着用户操作改变
      defaultYear: new Date().getFullYear(), // 当前年份，不变
      month: new Date().getMonth() + 1, // 当前月份，不变
      showValue: '',
      beforeYear: null // 默认显示上一季度所用时间，可能是去年
    }
  },
  created() {
  },
  mounted() {
    // 每次挂在时都对组件进行重置，那么就不需要在上级组件中进行重置
    this.getDefaultTime()
  },
  methods: {
    one() {
      this.showSeason = false
    },
    prev() {
      this.year = this.year * 1 - 1
    },
    next() {
      this.year = this.year * 1 + 1
    },
    selectSeason(i) {
      // 得到选择后的季度
      this.season = i + 1
      // let arr = this.valueArr[i].split("-");
      // let seasonValue = this.getValue(this.year + "-" + arr[0] + "-" + "01");
      // 选择季度后关闭弹框
      this.showSeason = false
      this.showValue = `${this.year} 年 ${this.season} 季度`
      this.$emit('chooseSeason', this.showValue) // 每次选择时间都将当前选择时间发送到父组件
    },
    // 获取默认的上一个季度
    getDefaultTime() {
      let year = this.defaultYear
      const month = this.month
      let season = null
      if (month <= 3) {
        this.season = 1
        year -= 1
        season = 4
        this.beforeYear = year
      } else if (month > 3 && month <= 6) {
        this.season = 2
        season = 1
        this.beforeYear = year
      } else if (month > 6 && month <= 9) {
        this.season = 3
        season = 2
        this.beforeYear = year
      } else if (month > 9 && month <= 12) {
        this.season = 4
        season = 3
        this.beforeYear = year
      }
      this.showValue = `${year}年${season}季度`
      this.$emit('chooseSeason', {
        year,
        season
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper_picker {
  display: inline;

  .firstBtn {
    height: 30px;
    line-height: 34px;
    width: 100%;
    text-align: center;
  }

  .text {
    text-align: center;
    margin: 15px 0 10px;
  }

  .item {
    text-align: center;
  }
}

.colorDis {
  color: #999 !important;
}

:deep(.wrapper_picker) {
  .el-card__header {
    padding: 12px;
  }
}
</style>
