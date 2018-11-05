<template>
  <div class="layout">
    <Layout style="position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;">
      <Header>
        <HaderMenu/>

      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <SidebarMenu/>
        </Sider>
        <Layout>
          <Content>
            <Layout>
              <Contents>

              </Contents>
            </Layout>
            <Layout>
              <Footer/>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import HaderMenu from "./HeaderMenu"
  import SidebarMenu from './SidebarMenu'
  import Footer from './Footer'
  import Contents from './Contents'

  export default {
    data() {
      return {}
    },
    components: {
      HaderMenu,
      SidebarMenu,
      Contents,
      Footer
    }

  }
</script>
