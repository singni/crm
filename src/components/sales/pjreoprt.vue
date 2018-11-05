<template>
  <div>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="客户名称" prop="name">
            <Input v-model="formValidate.name"></Input>
          </FormItem>
          <FormItem label="销售机会:" prop="level">
            <Input v-model="formValidate.name"></Input>
          </FormItem>

        </Form>
      </Col>
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="联系人:" prop="source">
            <Input v-model="formValidate.souce"></Input>
          </FormItem>
          <FormItem label="我方代表:" prop="type">
            <Input v-model="formValidate.type"></Input>
          </FormItem>
        </Form>
      </Col>
      <Col span="24">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="主题:" prop="remember">
            <Input v-model="formValidate.remember" type="textarea" :autosize="{minRows: 1,maxRows: 15}"></Input>
          </FormItem>
        </Form>
      </Col>
      <Col span="24">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="项目介绍:" prop="remember">
            <Input v-model="formValidate.remember" type="textarea" :autosize="{minRows: 4,maxRows: 30}"></Input>
          </FormItem>
        </Form>
      </Col>
      <Col span="24">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="所需支持:" prop="remember">
            <Input v-model="formValidate.remember" type="textarea" :autosize="{minRows: 4,maxRows: 30}"></Input>
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
        state:'',
        stateList: [
          {
            value: '1',
            label: '跟踪'
          },
          {
            value: '2',
            label: '成功'
          },
          {
            value: '3',
            label: '失败'
          },
          {
            value: '4',
            label: '搁置'
          },
          {
            value: '5',
            label: '失效'
          },
        ],
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
    }

  }
</script>
