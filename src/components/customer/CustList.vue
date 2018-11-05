<template>
  <div style="height: 850px">

    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="24">

        <Form :model="formLeft" :label-width="100">
          <Col span="4">
            <FormItem label="客户电话">
              <Input v-model="formLeft.phone"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="客户名称">
              <Input v-model="formLeft.name"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="建档日期">
              <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" ></DatePicker>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="所属行业">
              <Input v-model="formLeft.industry"></Input>
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
            title: '编号',
            key: 'name'
          },
          {
            title: '客户名称',
            key: 'age'
          },
          {
            title: '联系人',
            key: 'linkman'
          },
          {
            title: '手机',
            key: 'phone'
          },

          {
            title: '电话',
            key: 'moblie'
          },

          {
            title: '沟通记录',
            key: 'address'
          },

          {
            title: '等级',
            key: 'level'
          },

          {
            title: '来源',
            key: 'source'
          },
          {
            title: '经济类型',
            key: 'type'
          },
          {
            title: '所属行业',
            key: 'industry'
          },
          {
            title: '主营产品',
            key: 'produce'
          },
          {
            title: '地址',
            key: 'address'
          },

        ],
        tdata:[]
      }
    }
  }
</script>
