import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flyer from '../views/Flyer.vue'
import FirstPresentation from '../views/First-Presentation.vue'
import FirstPlan from '../views/First-Plan.vue'
import Goods from '../views/Goods.vue'
import GoodsGood from "../views/Goods-Good";
import Trade from "../views/Trade";

import View from '../views/View.vue'
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
        path: '/presentation',
        name: 'FirstPresentation',
        component: FirstPresentation
    },
    {
        path: '/plan',
        name: 'FirstPlan',
        component: FirstPlan
    },
    {
        path: '/goods',
        name: 'Goods',
        component: Goods
    },
    {
        path: '/good',
        name: 'GoodsGood',
        component: GoodsGood
    },
    {
        path: '/trade',
        name: 'Trade',
        component: Trade
    },
    {
        path: '/old',
        name: 'Old',
        component: Old
    },
    {
        path: '/view',
        name: 'View',
        component: View
    }
]

const router = new VueRouter({
    routes
})

export default router
