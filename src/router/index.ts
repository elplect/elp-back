import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/login.vue'
import CollectCenter from '@/views/back/mainComponent/CollectCenter.vue'
import MessageCenter from '@/views/back/mainComponent/MessageCenter.vue'
import Back from '@/views/back/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    // path: '/back',
    path: '',
    name: 'Back',
    component: Back,
    children: [
      {
        path: '',
        name: 'MessageCenter',
        component: MessageCenter
      },
      {
        path: 'collect',
        name: 'CollectCenter',
        component: CollectCenter
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
