import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/works/Portrait_A.vue'),
    meta: { title: '肖像A', desc: '肖像A' }
  },
 
 
  {
    path: '/postscript',
    name: 'postscript',
    component: () => import('../views/works/postscript.vue'),
    meta: { title: '肖像A', desc: '肖像A' }
  }  
]

const router = new VueRouter({
  routes
})

export default router
