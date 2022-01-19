import { createApp } from 'vue';
import App from './App.vue'
import routes from '@/router'
import { components, plugins } from './element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App)
// 按需使用elemntUI组件
components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
})
app.use(routes)
app.mount('#app')