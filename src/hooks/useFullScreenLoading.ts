import { ElLoading } from 'element-plus'
import { reactive, ref, shallowRef, watch } from 'vue'
// 全屏加载
export const useFullScreenLoading = () => {
  const loadState = ref<boolean>(false)
  const service = shallowRef()
  function loading() {
    loadState.value = true
    service.value = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.42)'
    })
  }
  function close() {
    if (service.value) {
      service.value.close()
    }
  }
  watch(
    () => loadState.value,
    () => {
      if (loadState.value) {
        loading()
      } else {
        close()
      }
    }
  )
  return reactive({
    loading,
    close,
    loadState
  })
}
