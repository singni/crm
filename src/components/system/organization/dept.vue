<template>
  <div style="height: 850px">

    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="24">

        <Form :model="formLeft" :label-width="100">
          <Col span="6">
            <FormItem label="部门名称">
              <Input v-model="formLeft.phone"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="部门电话">
              <Input v-model="formLeft.name"></Input>
            </FormItem>
          </Col>
          <Col span="4">
            <FormItem label="部门传真">
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
              <Button type="primary"  @click="newCenter = true">部门新增</Button>
            </FormItem>

            <Modal
              v-model="newCenter"
              title="部门新增">

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
            title: '部门名称',
            key: 'name'
          },
          {
            title: '部门电话',
            key: 'age'
          },
          {
            title: '部门传真',
            key: 'linkman'
          },
          {
            title: '部门职能',
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
