<template>
  <div class="port-list">
    <div v-for="(item, index) in workList" :key="item.meetingId" class="show-list">
      <div class="show-list-info">
        <div>
          <el-form-item label="涉及内容ID">
            <el-input v-model="item.context" size="mini" placeholder="涉及内容ID" :rows="1" style="padding: 2px 0;">
            </el-input>
          </el-form-item>
          <el-form-item label="涉及内容">
            <el-input v-model="item.content" size="mini" placeholder="涉及内容" :rows="1" style="padding: 2px 0;">
            </el-input>
          </el-form-item>
          <el-form-item label="可选内容">
            <el-input v-model="item.optional" size="mini" placeholder="可选内容" :rows="1" style="padding: 2px 0;">
            </el-input>
          </el-form-item>
        </div>
        <div class="show-list-opt">
          <el-button v-show="workList.length > 1" circle size="mini" icon="el-icon-minus" class="lightButton"
            @click="onDeleteItem(index)"></el-button>
          <el-button circle size="mini" icon="el-icon-plus" class="lightButton" @click="onAddItem(item)"></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'dayjs'
const dateMap = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// props: ,
defineProps({
  title: {
    require: true
  },
  value: {
    require: true,
    type: Array,
    default: () => ([])
  }
})
export default {
  name: 'WorkGroup',
  model: {
    prop: 'value',
    event: 'updateWork'
  },
  emits: ['updateWork'],
  data() {
    return {
      dateMap,
      workList: [{
        content: '',
        context: '',
        optional: ''
      }, '线路er'],
      editForm: {
        date: '',
        work: '',
        meetingId: ''
      },
      editId: ''
    }
  },
  mounted() {

  },
  methods: {
    moment,
    onStartAdd() {
      this.editState = true
      const info = {
        date: moment().format('YYYY-MM-DD'),
        work: '',
      }
      this.editId = info.meetingId
      this.editForm.meetingId = info.meetingId
      this.editForm.date = info.date
      this.editForm.work = info.work
      this.workList.unshift(info)
    },
    onDeleteItem(index) {
      this.workList.splice(index, 1)
      this.editId = ''
    },
    onDelete(receiveId) {
      this.$confirm('确认删除当前数据').then(res => {
      }).catch(err => {
        console.log(err)
      })
    },
    onEditItem(item) {
      this.workList = this.workList.filter(item => {
        return item.meetingId
      })
      this.editId = item.meetingId
      this.editForm.meetingId = item.meetingId
      this.editForm.date = item.date
      this.editForm.work = item.work
    },
    onAddItem(item) {
      this.workList.push('')
    },
    updateWork() {
      this.$emit('updateWork')
    },
  }
}
</script>

<style scoped lang="scss">
.port-list {
  // margin-left: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;

}

.lightButton {
  white-space: nowrap;
  font-weight: 550;
  box-sizing: border-box;
  outline: 0;
  text-align: center;
  color: #399c96;
}

.show-list {
  display: flex;
  border-radius: 4px;
  // border: 1px solid rgba(121, 121, 121, 0.1);
  // box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, .1);
  margin-bottom: 8px;

  .show-list-info {
    flex: 1 0 180px;
  }

  .show-list-opt {
    position: sticky;
    width: 80px;
    bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

.show-list-info {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(121, 121, 121, 0.1);
  border-radius: 6px;
  padding: 8px 8px 8px 0;
  margin-right: 12px;

}
</style>
