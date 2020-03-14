import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flyer from '../views/Flyer.vue'
import Old from '../views/Old.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
