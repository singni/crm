<template>
  <div style="height: 850px">

    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="24">

        <Form :model="formLeft" :label-width="100">
          <Col span="6">
            <FormItem label="岗位名称">
              <Input v-model="formLeft.phone"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="总经理">
              <Input v-model="formLeft.name"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="岗位职能">
              <Input v-model="formLeft.name"></Input>
            </FormItem>
          </Col>
          <Col span="2">
            <FormItem >
              <Button type="primary" >搜索</Button>
            </FormItem>

          </Col>
          <Col span="2">
            <FormItem >
              <Button type="primary"  @click="newCenter = true">新增用户</Button>
            </FormItem>

            <Modal
              v-model="newCenter"
              title="新增用户">

              <deptNew></deptNew>
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
  import deptNew from './deptNew'
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
            title: '账号',
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
            title: '手机',
            key: 'phone'
          },
          {
            title: '社交账号',
            key: 'phone'
          },
          {
            title: '邮箱',
            key: 'phone'
          },
          {
            title: '部门',
            key: 'phone'
          },

          {
            title: '职务',
            key: 'phone'
          },
          {
            title: '权限',
            key: 'phone'
          },
        ],
        tdata:[]
      }
    } ,components: {
      deptNew
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
