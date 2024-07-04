import type { FormInstance, FormItemProp } from 'element-plus'
import { ref } from 'vue'

const isDisabled = ref(false)
const timer = ref<NodeJS.Timeout|number>()
const timeText = ref('')

export const useVerifyCode = () => {
  const start = async (
    formEl: FormInstance | undefined,
    props: FormItemProp,
    time = 60
  ) => {
    if (!formEl) return
    const initTime = time
    await formEl.validateField(props, isValid => {
      if (isValid) {
        clearInterval(timer.value)
        isDisabled.value = true
        timeText.value = `${time}`
        timer.value = setInterval(() => {
          if (time > 0) {
            time -= 1
            timeText.value = `${time}`
          } else {
            timeText.value = ''
            isDisabled.value = false
            clearInterval(timer.value)
            time = initTime
          }
        }, 1000)
      }
    })
  }

  const end = () => {
    timeText.value = ''
    isDisabled.value = false
    clearInterval(timer.value)
  }

  return {
    isDisabled,
    timer,
    timeText,
    start,
    end
  }
}
