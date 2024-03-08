import { ref, reactive } from 'vue'
export const useUserInfo = function() {
  const token = ref('')

  const setToken = (receiveToken:string) => {
    token.value = receiveToken
  }
  return reactive({
    setToken,
    token: token.value
  })
}