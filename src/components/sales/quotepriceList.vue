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

              <quoteprice></quoteprice>
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
  import quoteprice from './quoteprice'
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
            title: '报价人',
            key: 'age'
          },
          {
            title: '客户名称',
            key: 'linkman'
          },
          {
            title: '销售机会',
            key: 'phone'
          },

          {
            title: '金额',
            key: 'moblie'
          },

          {
            title: '创建人',
            key: 'address'
          },

          {
            title: '建档时间',
            key: 'level'
          },

          {
            title: '审核',
            key: 'source'
          },{
            title: '审核人员',
            key: 'source'
          },{
            title: '审核时间',
            key: 'source'
          },
          {
            title: '操作',
            key: '123'
          }

        ],
        tdata:[]
      }
    } ,components: {
      quoteprice,
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
