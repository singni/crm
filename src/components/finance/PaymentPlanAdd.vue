<template>
  <div>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="供应商名称" prop="name">
            <Input v-model="formValidate.name"></Input>
          </FormItem>
          <FormItem label="采购订单:" prop="industry">
            <Input v-model="formValidate.industry" ></Input>
          </FormItem>
          <FormItem label="计划日期:" prop="industry">
            <Input v-model="formValidate.industry" ></Input>
          </FormItem>

        </Form>
      </Col>
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="付款期次:" prop="industry">
            <Input v-model="formValidate.industry" ></Input>
          </FormItem>
          <FormItem label="发票金额:" prop="linkman">
            <Input v-model="formValidate.linkman" ></Input>
          </FormItem>
          <FormItem label="计划付款金额:" prop="linkman">
            <Input v-model="formValidate.linkman" ></Input>
          </FormItem>
        </Form>
      </Col>

      <Col span="24">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="备注:" prop="remember">
            <Input v-model="formValidate.remember" type="textarea" :autosize="{minRows: 3,maxRows: 30}"></Input>
          </FormItem>
        </Form>
      </Col>
    </Row>



  </div>
</template>
<script>
  export default {
    data () {
      return {
        stage:'',
        stageData:[
          '初期沟通','立项评估','需求分析','方案制定','商务谈判','合同签订','失单'
        ],
        formValidate: {
          name: '',
          level: 0,
          industry: '',
          linkman: '',
          phone: '',
          souce: '',
          type: '',
          fax: '',
          website: '',
          moblie: '',
          email: '',
          zipCode: '',
          remember:''
        },
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          level: [
            { required: true, message: 'level cannot be empty', trigger: 'blur' },
          ],
          industry: [
            { required: true, message: 'industry cannot be empty', trigger: 'blur' }
          ],
          linkman: [
            { required: true, message: 'linkman cannot be empty', trigger: 'blur' }
          ],
          phone: [
            { required: true,  message: 'phone cannot be empty', trigger: 'blur' },
          ],
          souce: [
            { required: true,  message: 'soucecannot be empty', trigger: 'blur' }
          ],
          type: [
            { required: true,  message: 'type cannot be empty', trigger: 'blur' }
          ],
          moblie: [
            { required: true, message: 'moblie cannot be empty', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
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
