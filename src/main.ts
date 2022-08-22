import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
// import ElementPlus from 'element-plus'
const app = createApp(App)
app.mount('#app')
app.use(Router)
// app.use(ElementPlus, { size: 'small', zIndex: 3000 })
