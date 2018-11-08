<template>
  <div>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="12">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="供应商名称" prop="name">
          <Input v-model="formValidate.name"></Input>
        </FormItem>
        <FormItem label="手机:" prop="level">
          <Input v-model="formValidate.name"></Input>
        </FormItem>
        <FormItem label="邮编:" prop="industry">
          <Input v-model="formValidate.industry" ></Input>
        </FormItem>

        <FormItem label="联系电话:" prop="linkman">
          <Input v-model="formValidate.linkman" ></Input>
        </FormItem>
        <FormItem label="联系地址:" prop="linkman">
          <Input v-model="formValidate.linkman" ></Input>
        </FormItem>
      </Form>
      </Col>
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="姓名:" prop="linkman">
            <Input v-model="formValidate.linkman" ></Input>
          </FormItem>
          <FormItem label="性别:" prop="source">
            <RadioGroup v-model="sex" >
              <Radio label="男"></Radio>
              <Radio label="女"></Radio>

            </RadioGroup>
          </FormItem>
          <FormItem label="社交账号:" prop="type">
            <Input v-model="formValidate.type"></Input>
          </FormItem>
          <FormItem label="所在行业:" prop="website">
            <Input v-model="formValidate.website" ></Input>
          </FormItem>
          <FormItem label="邮箱:" prop="moblie">
            <Input v-model="formValidate.website" ></Input>
          </FormItem>
        </Form>
      </Col>
      <Col span="24">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="备注:" prop="remember">
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
        sex:'',
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
