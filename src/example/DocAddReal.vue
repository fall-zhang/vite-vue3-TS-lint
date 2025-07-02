<!-- 新建文章，编辑文章的页面 -->
<template>
  <LayoutCard>
    <div class="all-container">
      <div style="flex: 1;"></div>
      <div class="doc-out-container">
        <div class="doc-content">
          <h2 class="doc-title">技术部</h2>
          <div class="doc-text" style="display: flex;justify-content: center; margin-bottom:18px ;">
            <SingleEdit value="华北分部生技专" fitContent readonly></SingleEdit>
            [ <SingleEdit v-model="editForm.fwnf" fitContent></SingleEdit> ]
            <SingleEdit v-model="editForm.fwzh" fitContent readonly></SingleEdit> 号
          </div>
          <div class="base-info-line">
            <div class="info-inline-item doc-text">
              <div style="flex: 0 0 56px;">部门：</div>
              <SingleEdit v-model="editForm.ngbm"></SingleEdit>
            </div>
            <div class="info-inline-item doc-text">
              <div style="flex: 0 0 56px;">签发：</div>
              <SingleEdit value="" readonly></SingleEdit>
            </div>
            <div class="info-inline-item doc-text">
              <SingleEdit v-model="editForm.date" readonly></SingleEdit>
            </div>
          </div>
          <div class="zhusong-chaosong-line doc-text">
            <div style="flex: 0 0 56px;">主送：</div>
            <SingleEdit v-model="editForm.zhusong" style="width: 100%;"></SingleEdit>
          </div>
          <div class="zhusong-chaosong-line doc-text">
            <div style="flex: 0 0 56px;">抄送：</div>
            <SingleEdit v-model="editForm.chaosong" style="width: 100%;"></SingleEdit>
          </div>
          <!-- 小标题 文章标题 -->
          <ContentEdit class="doc-small-title" placeholder="此处输入标题内容" v-model="editForm.title" fitContent></ContentEdit>
          <ContentEdit class="doc-text" style="flex: 1;" v-model="editForm.zwnr" placeholder="此处输入文章内容"></ContentEdit>
        </div>
      </div>
      <div style="flex: 1;">
      </div>
    </div>
    <div class="button-operate">
      <div>内容排版仅供参考，一切以最终生成 pdf 排版为准</div>
      <el-button class="sparkButton" size="small" @click="onSubmitCheck">生成</el-button>
    </div>
  </LayoutCard>
</template>

<script lang="ts">
import LayoutCard from './components/LayoutCard.vue'
import LightDialog from '@/components/dialog/LightFormDialog.vue'
import { upload } from './api/doc-add'
import SingleEdit from './components/SingleEdit.vue'
import ContentEdit from './components/ContentEdit.vue'

export default {
  name: 'DocAddReal',
  components: {
    LayoutCard, LightDialog, SingleEdit, ContentEdit
  },
  data() {
    return {
      currentUser: '', // 当前用户
      currentId: '', // 当前编辑内容的 id
      maintainVisible: false,
      editForm: {
        id: '',
        date: 'yyyy 年 M 月 DD 日',
        ngr: '',
        fwdw: '',
        fwnf: 'YYYY',
        fwzh: 'X',
        ngbm: '话剧社',
        qfrq: '',
        zhusong: '',
        chaosong: '',
        title: '',
        zwnr: '',
      },
      fromRoute: '',
      fieUpdateList: [],
      zhusongList: [],
      yearSelectList: [],
      lightDialogVisible: false,
      isLeaf: false,
      lightDialogForm: {
        check: ''
      },
      signerList: [],
      isReceiveId: false
    }
  },
  watch: {

  },
  created() {
  },
  mounted() {
  },
  methods: {
    onClosePage() {
      const returnPath = this.fromRoute || '/doc-manage/doc-in-edit'
      this.$router.replace(returnPath)
    },
    onCancelLightDialog() {
      this.lightDialogVisible = false
    },
    // 检查页面表单
    onSubmitCheck() {
      this.lightDialogVisible = true
    },
    lightValidate() {
      if (!this.lightDialogForm.check) {
        this.$message.warning('请选择签发人')
        return false
      }
      return true
    },
    onFinalSubmit() {
      this.editForm.date = moment().format('yyyy-MM-DD HH:mm:ss')
      const submitForm = {
        ...this.editForm,
        qfr: this.lightDialogForm.check
      }
      if (this.isReceiveId) {
        submitForm.id = this.currentId
      }
      // 文件上传相关
      const updateFileList = []
      const newFileList = []
    },
  },
}
</script>

<style scoped lang="scss">
.all-container {
  display: flex;
  justify-content: center;
  height: 100%;
}

.doc-out-container {
  height: 100%;
  flex: 0 0 820px;
  margin: 0 auto;
  border: 1px solid;
}

.doc-content {
  width: 620px;
  height: 100%;
  flex-grow: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  // 
  .base-info-line {
    padding: 5px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #000;

    .info-inline-item {
      display: flex;
      // align-items: center;
      justify-content: flex-start;
    }
  }

  .zhusong-chaosong-line {
    padding: 5px 0;
    border-bottom: 1px solid #000;
    display: flex;
  }

  h2.doc-title {
    font-size: 32px;
    margin: 12px 0;
    font-weight: 800;
    line-height: 1.2em;
    height: 1.2em;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    color: #000;
  }

  .doc-small-title {
    margin: 10px 0;
    font-weight: 800;
    line-height: 1.6em;
    font-size: 20px;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #000;
  }

  .doc-text {
    font-size: 18px;
    line-height: 1.2em;
    height: 1.2em;
    margin-bottom: 0;
    font-family: monospace;
    color: #000;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    width: 6px;
    background-color: #808080;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(234, 234, 234);
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: rgb(255, 255, 255);
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
}

.sparkButton {
  white-space: nowrap;
  font-weight: 550;
  box-sizing: border-box;
  outline: 0;
  text-align: center;
  background-color: #0d867f;
  color: #ffffff;
  border-radius: 4px;
  border-color: #e2f3f0;

  &:focus {
    background-color: #0d867f;
    color: #ffffff;
    border-color: #e2f3f0;
  }

  &:active {
    background-color: #0d867f;
    color: #ffffff;
    border-color: #e2f3f0;
  }

  &:hover {
    background-color: #0d867f;
    color: #ffffff;
    border-color: #e2f3f0;
  }
}

.title-zone {
  height: 32px;
  padding: 6px 24px;
  display: flex;
  justify-content: space-between;

  .left-title {
    font-size: 15px;
    font-weight: 600;
  }

  .right-button {
    padding: 7px;
  }
}

.button-operate {
  gap: 12px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 12px 24px;
  flex: 0 0 56px;
  box-sizing: border-box;
}

::v-deep .el-autocomplete {
  .el-input__inner {
    border: none;
    padding: 0;
    height: 21px;
  }
}
</style>
