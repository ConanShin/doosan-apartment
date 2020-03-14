import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flyer from '../views/Flyer.vue'
import Old from '../views/Old.vue'
import Why from '../views/Why.vue'
import View from '../views/View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flyer',
    name: 'Flyer',
    component: Flyer
  },
  {
    path: '/old',
    name: 'Old',
    component: Old
  },
  {
    path: '/why',
    name: 'Why',
    component: Why
  },
  {
    path: '/view',
    name: 'View',
    component: View
  },
]

const router = new VueRouter({
  routes
})

export default router
