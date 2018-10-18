<template>
  <div>

    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="selectItem">
      <div v-for="menu in menuList">
        <MenuItem :name="menu.name">
          <Icon :type="menu.type"/>
          {{menu.text}}
        </MenuItem>
      </div>
    </Menu>
  </div>
</template>
<script>
  import store from "../store";

  export default {
    data() {
      return {
        theme1: 'dark',
        menuList: [
          {
            name: 'customer',
            type: 'md-bookmarks',
            text: '客户管理',
          },
          {
            name: 'sale',
            type: 'ios-flame',
            text: '销售管理',
          },
          {
            name: 'invoicing',
            type: 'ios-trending-up',
            text: '进销存',
          },
          {
            name: 'analyze',
            type: 'ios-paper',
            text: '统计分析',
          }, {
            name: 'Setting',
            type: 'md-build',
            text: '系统设置',
          }


        ]

      }
    }, methods: {
      selectItem(name) {
        console.log(name)
        if (name === 'customer') {
          this.$http.get('http://localhost:8080/static/json/customer.json')
            .then(function (response) {
              store.state.itemName = response.data
            })


        }
        if (name === 'sale') {
          this.$http.get('http://localhost:8080/static/json/sales.json')
            .then(function (response) {
              store.state.itemName = response.data
            })
        }
      }
    },created:function () {
      this.$http.get('http://localhost:8080/static/json/customer.json')
        .then(function (response) {
          store.state.itemName = response.data
        })
    }
  }
</script>
