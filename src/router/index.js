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
import pjreportList from '@/components/sales/pjreportList'
import contract from '@/components/contract/contract'
import website from '@/components/contract/website'

import order from '@/components/order/order'
import orderDetail from '@/components/order/order-detail'
import supplier from '@/components/supplier/supplier'
import supplierlink from '@/components/supplier/supplier-link'
import purchase from '@/components/purchase/purchase.vue'
import PurchaseDetail from '@/components/purchase/purchase-detail'
import statistics from '@/components/finance/statistics'
import BankAccount from '@/components/finance/BankAccount'
import PaymentPlan from '@/components/finance/PaymentPlan'
import PaymentRecord from '@/components/finance/PaymentRecord'
import InvoiceRecord from '@/components/finance/InvoiceRecord'
import PaybackPlan from '@/components/finance/PaybackPlan'
import ReturnRecord from '@/components/finance/ReturnRecord'
import BillingRecord from '@/components/finance/BillingRecord'
import OtherIncome from '@/components/finance/OtherIncome'
import Expenses from '@/components/finance/Expenses'
import Setting from '@/components/system/SystemParam/Setting'
import Dept from '@/components/system/organization/dept'
import User from '@/components/system/organization/user'
import JobManager from '@/components/system/organization/JobManager'
import purview from '@/components/system/organization/purview'
import Affiliatedlndustry from '@/components/system/CustomerTemplate/AffiliatedIndustry'
import Constrecord from '@/components/system/CustomerTemplate/Constrecord'
import EconomicType from '@/components/system/CustomerTemplate/EconomicType'
import CustomerSource from '@/components/system/CustomerTemplate/CustomerSource'
import MethodOfSales from '@/components/system/CustomerTemplate/MethodOfSales'
import SalesStage from '@/components/system/CustomerTemplate/SalesStage'
import ServiceType from '@/components/system/CustomerTemplate/ServiceType'
import ServiceMethod from '@/components/system/CustomerTemplate/ServiceMethod'
import ProductCategories from '@/components/system/ProductTemplate/ProductCategories'
import ProductManagement from '@/components/system/ProductTemplate/ProductManagement'
import ProductNature from '@/components/system/ProductTemplate/ProductNature'
import ProductUnit from '@/components/system/ProductTemplate/ProductUnit'


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
          name: "customer",
          path: '/customer/add',
          component: customer
        }, {
          name: "CustList",
          path: '/customer/list',
          component: CustList
        },
        {
          name: "LinkMan",
          path: '/linkman/add',
          component: LinkMan
        },
        {
          name: "LinkMan",
          path: '/linkman/list',
          component: LinkManList
        }, {
          name: "SalesList",
          path: '/sales/list',
          component: SalesList
        },
        {
          name: "quotepriceList",
          path: '/sales/quoteprice',
          component: quotepriceList
        },
        {
          name: "annal",
          path: '/sales/annal',
          component: annalList

        },
        {
          name: "pjreportList",
          path: '/sales/pjreport',
          component: pjreportList
        },
        {
          name: "contract",
          path: '/contract/list',
          component: contract
        },
        {
          name: "website",
          path: '/contract/website',
          component: website
        },
        {
          name: "order",
          path: '/order/list',
          component: order
        },
        {
          name: "orderDetail",
          path: '/order/detail',
          component: orderDetail
        }, {
          name: "supplier",
          path: '/supplier/list',
          component: supplier
        },
        {
          name: "supplier",
          path: '/supplier/link',
          component: supplierlink
        },
        {
          name: "purchase",
          path: '/purchase/list',
          component: purchase
        },
        {
          name: "PurchaseDetail",
          path: '/purchasedetail/detail',
          component: PurchaseDetail
        },
        {
          name: "statistics",
          path: '/finance/statistics',
          component: statistics
        }, {
          name: "BankAccount",
          path: '/finance/bankaccount',
          component: BankAccount
        },
        {
          name: "PaymentPlan",
          path: '/finance/paymentplan',
          component: PaymentPlan
        },
        {
          name: "PaymentRecord",
          path: '/finance/PaymentRecord',
          component: PaymentRecord
        },
        {
          name: "InvoiceRecord",
          path: '/finance/InvoiceRecord',
          component: InvoiceRecord
        },
        {
          name: "PaybackPlan",
          path: '/finance/paybackplan',
          component: PaybackPlan
        },
        {
          name: "ReturnRecord",
          path: '/finance/returnrecord',
          component: ReturnRecord
        },
        {
          name: "BillingRecord",
          path: '/finance/BillingRecord',
          component: BillingRecord
        },
        {
          name: "OtherIncome",
          path: '/finance/OtherIncome',
          component: OtherIncome
        },
        {
          name: "Expenses",
          path: '/finance/Expenses',
          component: Expenses
        },

        {
          name: "Setting",
          path: '/system/setting',
          component: Setting
        },
        {
          name: "Dept",
          path: '/system/dept',
          component: Dept
        },

        {
          name: "User",
          path: '/system/user',
          component: User
        },
        {
          name: "JobManager",
          path: '/system/jobmanager',
          component: JobManager
        },
        {
          name: "purview",
          path: '/system/purview',
          component: purview
        }, {
          name: "Affiliatedlndustry",
          path: '/system/Affiliatedlndustry',
          component: Affiliatedlndustry
        }, {
          name: "Affiliatedlndustry",
          path: '/system/Affiliatedlndustry',
          component: Affiliatedlndustry
        },
        {
          name: "Constrecord",
          path: '/system/Constrecord',
          component: Constrecord
        },
        {
          name: "EconomicType",
          path: '/system/EconomicType',
          component: EconomicType
        },
        {
          name: "MethodOfSales",
          path: '/system/MethodOfSales',
          component: MethodOfSales
        },
        {
          name: "CustomerSource",
          path: '/system/CustomerSource',
          component: CustomerSource
        },
        {
          name: "SalesStage",
          path: '/system/SalesStage',
          component: SalesStage
        },
        {
          name: "ServiceType",
          path: '/system/ServiceType',
          component: ServiceType
        },
        {
          name: "ServiceMethod",
          path: '/system/ServiceMethod',
          component: ServiceMethod
        },
        {
          name: "ProductCategories",
          path: '/Product/ProductCategories',
          component: ProductCategories
        },
        {
          name: "ProductManagement",
          path: '/Product/ProductManagement',
          component: ProductManagement
        },
        {
          name: "ProductNature",
          path: '/Product/ProductNature',
          component: ProductNature
        },
        {
          name: "ProductUnit",
          path: '/Product/ProductUnit',
          component: ProductUnit
        },

      ]
    },


  ]
})
