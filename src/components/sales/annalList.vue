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
              <Button type="primary"  @click="newCenter = true" >新建跟踪记录</Button>
            </FormItem>

            <Modal
              v-model="newCenter"
              title="新建跟踪记录">

              <annal></annal>
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
  import annal from './annal'
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
            title: '联系时间',
            key: 'name'
          },
          {
            title: '主题',
            key: 'age'
          },
          {
            title: '联系人',
            key: 'linkman'
          },
          {
            title: '客户名称',
            key: 'phone'
          },

          {
            title: '状态',
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
            title: '客户代表',
            key: 'source'
          },{
            title: '对应机会',
            key: 'source'
          },{
            title: '销售方式',
            key: 'source'
          }

        ],
        tdata:[]
      }
    } ,components: {
      annal,
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
