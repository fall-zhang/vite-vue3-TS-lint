<template>
  <el-dialog ref="drawer" v-model:visible="drawerShow" v-dialogDrag width="860px" :title="currentTitle" direction="rtl"
    moveable="true">
    <div class="drawer-content">
      <el-form ref="planForm" label-width="128px" label-position="right" :model="drawerForm" :rules="planFormRules"
        size="mini">
        <div style="display: grid;grid-template-columns: 1fr 1fr;">
          <el-form-item label="项目名称" prop="xmmc">
            <el-input v-model="drawerForm.xmmc"></el-input>
          </el-form-item>
          <el-form-item label="总投资" prop="ztz">
            <el-input-number v-model="drawerForm.ztz" :min="0"></el-input-number>
          </el-form-item>
          <el-form-item label="当年资金" prop="dnzj">
            <el-input-number v-model="drawerForm.dnzj" :min="0"></el-input-number>
          </el-form-item>
          <el-form-item label="项目单位" prop="xmdw">
            <el-select v-model="drawerForm.xmdw">
              <el-option label="本部" value="本部"></el-option>
              <el-option label="陕西" value="陕西"></el-option>
              <el-option label="甘肃" value="甘肃"></el-option>
              <el-option label="青海" value="青海"></el-option>
              <el-option label="宁夏" value="宁夏"></el-option>
              <el-option label="新疆" value="新疆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目处室" prop="xmcs">
            <el-input v-model="drawerForm.xmcs"></el-input>
          </el-form-item>
          <el-form-item label="项目开始时间" prop="xmkssj">
            <el-date-picker v-model="drawerForm.xmkssj" type="date" style="width: 100%;margin: 0;"
              value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
        </div>
      </el-form>
      <div style="flex-grow: 1;"></div>
      <div class="drawer-footer">
        <el-button class="cancel-button" size="small" @click="cancelSubmit">取消</el-button>
        <el-button type="primary" size="small" @click="submitFrom">
          保存
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { deepClone } from '@/utils/common'
const planFormRules = {
  // xmmc: [
  //   { required: true, trigger: 'change', message: '请输入项目名称' }
  // ],
  // maintenanceWorkEndTime: [
  //   { required: true, trigger: 'change', message: '请输入工作结束时间' }
  // ]
}
export default {
  name: 'PlanCandidateDrawerForm',
  props: {
    visible: {
      require: true,
      default: false,
      type: Boolean
    },
    title: {
      require: false,
      type: String,
      default: ''
    },
  },
  data() {
    return {
      titleStatus: '新增',
      planFormRules,
      drawerShow: false,
      drawerForm: {
        bj: '',
        xmmc: '',
        xmbm: '',
        zylb: '',
        zymx: '',
        dydj: '',
        ztz: '',
        ztztz: '',
        ljyxd: '',
        dnjhtz: '',
        dnjh: '',
        dnzj: '',
        xmdw: '',
        xmcs: '',
        xmkssj: '',
        xmjssj: '',
        // xmnr: '',
      },
      submitLoading: false,
      movePosition: { x: 0, y: 0 },
      originPosition: { x: 0, y: 0 }
    }
  },
  computed: {
    currentTitle() {
      return this.title + this.titleStatus
    }
  },
  watch: {
    visible(newVal) {
      this.drawerShow = newVal
    },
    drawerShow(newVal) {
      this.$emit('update:visible', newVal)
    }
  },
  mounted() {
    this.$emit('update:visible', false)
  },
  methods: {
    onEditForm(receiveValue) {
      if (receiveValue) {
        this.titleStatus = '编辑'
      } else {
        this.titleStatus = '新增'
      }
      this.drawerShow = true
      try {
        this.$refs.planForm.resetFields()
      } catch (err) {
        console.log('找不到 planForm')
      }
      if (receiveValue) {
        this.drawerForm = { ...receiveValue }
        this.$forceUpdate()
      }
    },
    submitFrom() {
      const _this = this
      const postData = deepClone(_this.drawerForm)
      if (!postData.ztz && postData.ztz !== 0) {
        postData.ztz = ''
      }
      if (!postData.dnzj && postData.dnzj !== 0) {
        postData.dnzj = ''
      }
      if (this.$refs.planForm) {
        _this.$refs.planForm.validate((valid) => {
          // console.log('通过了？');
          if (valid) {
            _this.$emit('submit', postData, _this.formType)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else {
        // _this.$emit('submit', _this.drawerForm, _this.formType)
      }
    },
    cancelSubmit() {
      this.drawerShow = false
    }
  }
}
</script>

<style scoped lang="scss">
.cancel-button {
  background-color: #e9e9e9;
  color: #242424;

  &:hover {
    color: #242424;
    border: 1px solid #e9e9e9;
    box-sizing: border-box;
  }
}

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px;

  .drawer-footer {
    display: flex;
    justify-content: flex-end;
    // gap: 20px;
    width: 100%;
  }
}

::v-deep {
  .el-form-item {
    margin: 0 0 12px 30px;
  }
}

::v-deep .el-dialog__header {
  background-color: #0d867f;
  padding: 10px;
  color: white;
  cursor: move;

  .el-dialog__headerbtn {
    top: 13px
  }

  .el-dialog__close {
    color: white;
    // line-height: 20px;
  }

  .el-dialog__title {
    color: white;
  }
}
</style>
