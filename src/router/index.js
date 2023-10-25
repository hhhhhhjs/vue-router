import {createRouter,createWebHistory} from 'vue-router'
import HomeComp from '@/components/Home.vue'
import LoginComp from '@/components/Login.vue'

const routes = [
  { path: '/', component: HomeComp},
  { path: '/login', component: LoginComp },
]

const router = createRouter({

  history: createWebHistory(),
  routes:routes 
})
export default router



