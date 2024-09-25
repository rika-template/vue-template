import routes from '@/router/routes.ts'
import { getHistoryMode } from '@/router/utils.ts'
import { createRouter } from 'vue-router'

const { VITE_ROUTER_HISTORY } = import.meta.env

const router = createRouter({
  history: getHistoryMode(VITE_ROUTER_HISTORY),
  routes,
})

export default router
