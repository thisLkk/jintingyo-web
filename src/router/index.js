import routesConfig from './route'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('/jintingyo-web/'),
  routes: routesConfig
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    next()
  } else {
    next()
  }
})

export default router
