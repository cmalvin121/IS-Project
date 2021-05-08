import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Chatroom',
    component: () => import('@/views/Chatroom'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
