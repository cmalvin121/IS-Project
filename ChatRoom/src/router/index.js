//import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chatroom',
    component: () => import('@/views/Chatroom'),
  },
]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

const router = new VueRouter({
  routes
});

export default router
