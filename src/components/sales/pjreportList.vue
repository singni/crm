<template>
  <div style="height: 850px">

    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="24">

        <Form :model="formLeft" :label-width="100">
          <Col span="6">
            <FormItem label="客户名称">
              <Input v-model="formLeft.phone"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="主题">
              <Input v-model="formLeft.name"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="联系时间">
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
              <Button type="primary"  @click="newCenter = true" >新建</Button>
            </FormItem>

            <Modal
              v-model="newCenter"
              title="新建机会">

              <pjreoprt></pjreoprt>
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
  import pjreoprt from './pjreoprt'
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
            title: '主题',
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
            title: '销售机会',
            key: 'phone'
          },

          {
            title: '申请人',
            key: 'moblie'
          },

          {
            title: '申请时间',
            key: 'address'
          },

          {
            title: '是否审核',
            key: 'level'
          },

          {
            title: '审核批注',
            key: 'source'
          },{
            title: '审核人',
            key: 'source'
          },{
            title: '审核时间',
            key: 'source'
          },{
            title: '操作',
            key: 'source'
          }

        ],
        tdata:[]
      }
    } ,components: {
      pjreoprt,
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
