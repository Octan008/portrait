import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/works/Portrait_A.vue')
  },
 
 
  {
    path: '/postscript',
    name: 'postscript',
    component: () => import('../views/works/postscript.vue')
  }  
]

const router = new VueRouter({
  routes
})

export default router
