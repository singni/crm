<template>
  <div>

    <Menu mode="horizontal" :theme="theme1" active-name="1"    >
      <MenuItem v-for="mun in memuList" :name="mun.name+1" >
        <Icon :type="mun.type"/>
        {{mun.text}}
      </MenuItem>

    </Menu>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name:0,
        theme1: 'dark',
        memuList:[
          {
            type:'md-bookmarks',
            text:'客户管理',
          },
          {
            type:'ios-flame',
            text:'销售管理',
          },
          {
            type:'ios-trending-up',
            text:'进销存',
          },
          {
            type:'ios-paper',
            text:'统计分析',
          },{
            type:'md-build',
            text:'系统设置',
          }


    ]

      }
    }
  }
</script>
