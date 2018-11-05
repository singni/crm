<template>


    <Menu active-name="1-2" width="auto" :style="{height:'100%'}" :open-names="['0']">


        <div v-for="(menu, key) in menuList">
          <Submenu :name=key>
            <template slot="title">
              <Icon type="ios-analytics"/>
              {{menu.text}}
            </template>

            <div v-for="children in menu.children">
              <MenuItem :name=children.text :to=children.link>{{children.text}}</MenuItem>
            </div>

          </Submenu>
        </div>


    </Menu>
</template>
<script>
  import store from "../store";

  export default {
    data() {
      return {
        theme: 'light',
      }
    }, computed: {
      menuList: function () {
        return store.state.itemName
      }
    }


  }
</script>
<style scoped>

</style>
