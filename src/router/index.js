import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/auth/login"
import Layout from "@/pages/layout"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name:"login",
      component:Login
    },{
      path:'/',
      name:"layout",
      component:Layout
    }
  ]
})
