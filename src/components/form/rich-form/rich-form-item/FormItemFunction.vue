<!-- 改内容负责将数组，对象，等复杂数据传入进来，然后转化为 JSON 进行编辑，编辑后通过原类型传输回去 -->

<template>
  <div>
    <el-input v-model="jsonValue" size="small" type="textarea" @input="onChangeJSONValue" />
  </div>
</template>

<script lang="ts">

export default {
  name: 'FormJSON',
  props: {
    modelValue: {
      type: String,
      default: '',
      require: true
    }
  },
  emits: ['update:modelValue', 'change'],
  data() {
    const boundValue: {
      (): void
    } | Function = () => { }
    return {
      jsonValue: '',
      boundValue,
      timberFun: -1
    }
  },
  computed: {},
  watch: {},
  created() {
    this.jsonValue = JSON.stringify(this.modelValue)
  },
  methods: {
    onChangeJSONValue() {
      clearTimeout(this.timberFun)
      this.timberFun = setTimeout(this.parseValue, 500) as unknown as number
    },
    // changeState() {
    //   if (this.emitState) {
    //     this.parseValue()
    //     this.emitState = false
    //   } else {
    //     this.emitState = true
    //   }
    // },
    parseValue() {
      try {
        // eslint-disable-next-line no-new-func
        this.boundValue = new Function(this.jsonValue)
      } catch (e) {
        this.boundValue = () => ''
        throw new Error('写入的方法出错')
        // throw new Error('写入的方法出错', { cause: e })
      }
      // console.log('更新值', this.boundValue);
      this.$emit('change', this.boundValue)
    }
  }
}
</script>

<style scoped lang="scss">
.el-textarea {
  :deep(.el-textarea__inner) {
    max-height: 102px;
  }
}
</style>
