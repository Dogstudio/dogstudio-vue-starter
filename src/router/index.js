// Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Routes
import routes from './index.routes'

// Router
const router = createRouter({
  routes,
  history: createWebHistory(),
})

// Export Router
export default router
