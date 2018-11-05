<template>
  <div style="height: 850px">

    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="24">

        <Form :model="formLeft" :label-width="100">
          <Col span="6">
            <FormItem label="联系人电话">
              <Input v-model="formLeft.phone"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="联系人姓名">
              <Input v-model="formLeft.name"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="建档日期">
              <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" ></DatePicker>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem >
              <Button type="primary" >搜索</Button>
            </FormItem>

          </Col>


        </Form>
      </Col>
      <Col span="24">
        <Table :columns="listcol" :data="tdata" height="710px"  ></Table>
      </Col>

    </Row>


    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
      <Col  span="24" :style="{padding:'15px'}">
        <Page :total="100" show-sizer />
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data() {
      return {

        formLeft: {
          phone: '',
          name: '',
          industry: '',

        },
        listcol: [
          {
            title: '客户',
            key: 'name'
          },
          {
            title: '姓名',
            key: 'age'
          },
          {
            title: '性别',
            key: 'linkman'
          },
          {
            title: '职务',
            key: 'phone'
          },

          {
            title: '手机',
            key: 'moblie'
          },

          {
            title: '座机',
            key: 'address'
          },

          {
            title: '社交账号',
            key: 'level'
          },

          {
            title: '邮箱',
            key: 'source'
          }

        ],
        tdata:[]
      }
    }
  }
</script>
