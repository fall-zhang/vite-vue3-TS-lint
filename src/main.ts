import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
// import ElementPlus from 'element-plus'
// console.log(import.meta.env)

const app = createApp(App)
app.use(Router)
app.mount('#app')
