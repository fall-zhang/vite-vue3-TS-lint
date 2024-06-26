<template>
  <RichForm></RichForm>
</template>

<script lang="ts" setup>
import RichForm from '@/components/form/rich-form/RichForm.vue'
defineOptions({
  name: 'RichFormExample'
})
const columns = ref([
  { field: 'name', key: 'a', title: 'Name', align: 'center' },
  { field: 'date', key: 'b', title: 'Date', align: 'left' },
  { field: 'hobby', key: 'c', title: 'Hobby', align: 'right' },
  { field: 'address', key: 'd', title: 'Address' },
])
const tableData = ref<any[]>([
])
onMounted(() => {
  // for (let i = 0; i < 10000; i++) {
  //   tableData.value.push({
  //     rowKey: i,
  //     name: 'John',
  //     date: '1900-05-20',
  //     hobby: 'coding and coding repeat',
  //     address: 'No.1 Century Avenue, Shanghai',
  //   })
  // }
  // console.log(tableData.value)
  // triggerRef(tableData)
})
</script>
