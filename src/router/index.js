import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/auth/login'
import Full from '@/pages/Full'
import customer from '@/components/customer/customer'
import CustList from '@/components/customer/CustList'
import LinkMan from '@/components/linkman/linkman'
import LinkManList from '@/components/linkman/linkmanList'
import SalesList from '@/components/sales/salesList'
import quotepriceList from '@/components/sales/quotepriceList'
import annalList from '@/components/sales/annalList'
import  pjreportList from '@/components/sales/pjreportList'
import contract  from '@/components/contract/contract'
import  website from '@/components/contract/website'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/login',
      name: "login",
      component: Login
    }, {
      path: '/',
      name: "Full",
      component: Full,
      children: [
        {
          name:"customer",
          path: '/customer/add',
          component: customer
        }, {
          name:"CustList",
          path: '/customer/list',
          component: CustList
        },
        {
          name:"LinkMan",
          path: '/linkman/add',
          component: LinkMan
        },
        {
          name:"LinkMan",
          path: '/linkman/list',
          component: LinkManList
        },{
          name:"SalesList",
          path: '/sales/list',
          component: SalesList
        },
        {
          name:"quotepriceList",
          path: '/sales/quoteprice',
          component: quotepriceList
        },
        {
          name:"annal",
          path: '/sales/annal',
          component: annalList

        },
        {
          name:"pjreportList",
          path: '/sales/pjreport',
          component: pjreportList
        },
        {
          name:"contract",
          path: '/contract/list',
          component: contract
        },
        {
          name:"website",
          path: '/contract/website',
          component: website
        },
      ]
    },


  ]
})
