<template>
  <div>
    <el-button @click="onRequest">点击按钮</el-button>
    {{ visible ? "asdadsa" : '' }}
    <MyDialog v-model:visible="visible">
      中间的内容
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './MyDialog.vue'
export default {
  name: 'DialogWord',
  components: {
    MyDialog
  },
  props: {},
  data() {
    return {
      visible: true
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    onRequest() {
    }
  }
}
</script>

<style scoped lang="scss"></style>
