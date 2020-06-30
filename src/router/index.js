import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
// import Estimation from '../pages/Estimation.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Dashboard.vue')
  },
  {
    path: '/estimation',
    name: 'Estimation',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Estimation.vue')
  },
  {
    path: '/cashiersystem',
    name: 'CashierSystem',
    component: () => import(/* webpackChunkName: "about" */ '../pages/CashierSystem.vue')
  },
  {
    path: '/storenotset',
    name: 'StoreNotSet',
    component: () => import(/* webpackChunkName: "about" */ '../pages/StoreNotSet.vue')
  },
  {
    path: '/createcustomer',
    name: 'CreateCustomer',
    component: () => import(/* webpackChunkName: "about" */ '../pages/CreateCustomer.vue')
  }, 
  {
    path: '/popupcustomer',
    name: 'PopUpCustomer',
    component: () => import(/* webpackChunkName: "about" */ '../pages/PopUpCustomer.vue')
  },
  {
    path: '/createcompany',
    name: 'CreateCompany',
    component: () => import(/* webpackChunkName: "about" */ '../pages/CreateCompany.vue')
  },
  {
    path: '/createstore',
    name: 'CreateStore',
    component: () => import(/* webpackChunkName: "about" */ '../pages/CreateStore.vue')
  },
  {
    path: '/editstore',
    name: 'EditStore',
    component: () => import(/* webpackChunkName: "about" */ '../pages/EditStore.vue')
  },
  {
    path: '/showstores',
    name: 'ShowStores',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ShowStores.vue')
  },
  {
    path: '/items',
    name: 'Items',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Items.vue')
  },
  {
    path: '/createitem',
    name: 'CreateItem',
    component: () => import(/* webpackChunkName: "about" */ '../pages/CreateItem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
