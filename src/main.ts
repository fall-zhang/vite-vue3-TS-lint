import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
import '@/assets/styles/main.scss'
import VeTable, { VeLocale } from 'vue-fantable'
import 'vue-fantable/libs/theme-default.css'
import zh from 'vue-fantable/libs/lang/zh-CN'
// import immer from 'immer'
// import ElementPlus from 'element-plus'
// console.log(import.meta.env)

const app = createApp(App)
app.use(Router)
VeLocale.use(zh)
app.use(VeTable)
app.mount('#app')
