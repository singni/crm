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
            <FormItem label="建档时间">
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
              <Button type="primary"  @click="newCenter = true" >采购订单添加</Button>
            </FormItem>

            <Modal
              v-model="newCenter"
              title="采购订单添加">

              <PurchaseAdd></PurchaseAdd>
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
  import PurchaseAdd from './purchase-add'
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
            title: '订单编号',
            key: 'age'
          },
          {
            title: '客户名称',
            key: 'linkman'
          },
          {
            title: '联系人',
            key: 'phone'
          },

          {
            title: '采购时间',
            key: 'moblie'
          },

          {
            title: '预计到货时间',
            key: 'address'
          },

          {
            title: '总金额',
            key: 'level'
          },

          {
            title: '去零金额',
            key: 'source'
          },{
            title: '付款金额',
            key: 'source'
          },{
            title: '入库金额',
            key: 'source'
          },{
            title: '已收票金额',
            key: 'source'
          },{
            title: '我方代表',
            key: 'source'
          },{
            title: '订单状态',
            key: 'source'
          },{
            title: '付款状态',
            key: 'source'
          },{
            title: '收货状态',
            key: 'source'
          },{
            title: '开票状态',
            key: 'source'
          },{
            title: '操作',
            key: 'source'
          }

        ],
        tdata:[]
      }
    } ,components: {
      PurchaseAdd,
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
