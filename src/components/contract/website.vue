<template>
  <div style="height: 850px">

    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="24">

        <Form :model="formLeft" :label-width="100">
          <Col span="4">
            <FormItem label="网站名称">
              <Input v-model="formLeft.phone"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="网址">
              <Input v-model="formLeft.phone"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="开始时间">
              <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" ></DatePicker>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="结束时间">
              <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" ></DatePicker>
            </FormItem>
          </Col>
          <Col span="2">
            <FormItem >
              <Button type="primary" >搜索</Button>
            </FormItem>

          </Col>
          <Col span="2">
            <FormItem >
              <Button type="primary"  @click="newCenter = true" >新增网站</Button>
            </FormItem>

            <Modal
              v-model="newCenter"
              title="新增网站">

              <websiteNew></websiteNew>
              <div slot="footer">

                <FormItem>
                  <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                  <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </FormItem>
              </div>
            </Modal>
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
  import websiteNew from './websiteNew'
  export default {
    data() {
      return {
        newCenter: false,
        formLeft: {
          phone: '',
          name: '',
          industry: '',

        },
        listcol: [
          {
            title: '网站名称',
            key: 'name'
          },
          {
            title: '客户名称',
            key: 'age'
          },
          {
            title: '网址',
            key: 'linkman'
          },
          {
            title: '开始时间',
            key: 'phone'
          },

          {
            title: '到期时间',
            key: 'moblie'
          },

          {
            title: 'ftp地址',
            key: 'address'
          },

          {
            title: 'ftp账号',
            key: 'level'
          },

          {
            title: 'ftp密码',
            key: 'source'
          },{
            title: 'icp账号',
            key: 'source'
          },{
            title: 'icp密码',
            key: 'source'
          },{
            title: 'icp编号',
            key: 'source'
          },{
            title: '状态',
            key: 'source'
          }

        ],
        tdata:[]
      }
    } ,components: {
      websiteNew
    },methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
