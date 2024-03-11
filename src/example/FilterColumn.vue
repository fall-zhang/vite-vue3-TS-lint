<template>
  <el-popover>
    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <div style="width: 320px;height: 76vh;overflow: hidden auto;">
      <el-checkbox-group v-model="checkColumns" @change="handleSingleCheckeChange">
        <el-checkbox v-for="col in allColumn" :key="col.prop" :label="col.label" style="width: 100%;">
          {{ col.label }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <el-button type="primary" size="mini" @click="onFilterList">筛选</el-button>
    <template #reference>
<div style="color:#0d867f ; cursor: pointer;">
      <slot><i class="pmsIconfont pms-pc-iconshudian-shaixuanPC"></i> 筛选列</slot>
    </div>
</template>
  </el-popover>
</template>

<script>
export default {
  name: 'FilterColumn',
  props: {
    column: {
      require: true,
      type: Array,
      default: () => ([])
    },
  },
  data() {
    return {
      checkAll: true,
      checkColumns: [],
      allColumn: [],
      isIndeterminate: true
    }
  },
  watch: {
    // column(newVal) {
    //   this.allColumn = newVal
    //   this.checkColumns = newVal.map(item => item.label)
    // }
  },
  created() {
    this.allColumn = this.column
    this.checkColumns = this.column.map(item => item.label)
    this.isIndeterminate = false
    this.onFilterList()
  },
  methods: {
    handleCheckAllChange(val) {
      if (val) {
        this.checkColumns = this.allColumn.map(item => item.label)
      } else {
        this.checkColumns = []
      }
      this.isIndeterminate = false
    },
    handleSingleCheckeChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.allColumn.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.allColumn.length
    },
    onFilterList() {
      const commitData = this.allColumn.filter(item => this.checkColumns.includes(item.label))
      // console.log("🚀 ~ file: FilterColumn.vue:69 ~ onFilterList ~ commitData:", commitData)
      this.$emit('update', commitData)
    }
  }
}
</script>

<style scoped lang="scss"></style>
