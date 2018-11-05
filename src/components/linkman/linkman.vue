<template>
  <div>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="12">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="客户名称" prop="name">
          <Input v-model="formValidate.name"></Input>
        </FormItem>
        <FormItem label="性别:" prop="level">
          <template>
            <Rate v-model="formValidate.level" />
          </template>
        </FormItem>
        <FormItem label="手机:" prop="industry">
          <Input v-model="formValidate.industry" ></Input>
        </FormItem>
        <FormItem label="社交账号:" prop="linkman">
          <Input v-model="formValidate.linkman" ></Input>
        </FormItem>
        <FormItem label="邮编:" prop="phone">
          <Input v-model="formValidate.phone" ></Input>
        </FormItem>
      </Form>
      </Col>
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="姓名:" prop="source">
            <Input v-model="formValidate.souce"></Input>
          </FormItem>
          <FormItem label="所在职位:" prop="type">
            <Input v-model="formValidate.type"></Input>
          </FormItem>
          <FormItem label="联系电话:" prop="website">
            <Input v-model="formValidate.website" ></Input>
          </FormItem>
          <FormItem label="邮箱:" prop="moblie">
            <Input v-model="formValidate.moblie" ></Input>
          </FormItem>
          <FormItem label="联系地址:" prop="fax">
            <Input v-model="formValidate.fax" ></Input>
          </FormItem>
        </Form>
      </Col>
      <Col span="24">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="介绍:" prop="remember">
          <Input v-model="formValidate.remember" type="textarea" :autosize="{minRows: 4,maxRows: 30}"></Input>
        </FormItem>
      </Form>
      </Col>
    </Row>


    <Row type="flex" justify="end" class="code-row-bg">

      <Col span="24">
        <Form :model="formValidate" :label-width="80">
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
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
