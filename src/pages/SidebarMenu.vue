<template>

  <div>

    <Menu active-name="1-2" :open-names="['1']" width="auto">
      <Submenu name="1">

        <template slot="title">
          <Icon type="ios-analytics" />
          Navigation One
        </template>
        <div>

            <div v-for="menu in menuList">
              <MenuGroup :title="menu.text">
                <MenuItem  name="1-1">{{menu.title}}</MenuItem>
                <MenuItem name="1-2">{{menu.find}}</MenuItem>
              </MenuGroup>
            </div>
        </div>

      </Submenu>
    </Menu>
  </div>
</template>
<script>
  import store from "../store";

  export default {
    data() {
      return {
        name: 0,
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
