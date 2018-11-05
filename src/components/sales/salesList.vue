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
              <Button type="primary"  @click="newCenter = true" >新建机会</Button>
            </FormItem>

            <Modal
              v-model="newCenter"
              title="新建机会">

              <sales></sales>
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
  import sales from './sales'
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
            title: '机会主题',
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
            title: '发现时间',
            key: 'phone'
          },

          {
            title: '预计签单时间',
            key: 'moblie'
          },

          {
            title: '可能性',
            key: 'address'
          },

          {
            title: '当前阶段',
            key: 'level'
          },

          {
            title: '状态',
            key: 'source'
          },{
            title: '建档人员',
            key: 'source'
          },{
            title: '建档时间',
            key: 'source'
          }

        ],
        tdata:[]
      }
    } ,components: {
      sales,
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
