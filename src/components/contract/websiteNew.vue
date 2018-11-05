<template>
  <div>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="客户名称" prop="name">
            <Input v-model="formValidate.name"></Input>
          </FormItem>
          <FormItem label="网站地址:" prop="level">
            <Input v-model="formValidate.name"></Input>
          </FormItem>
          <FormItem label="结束时间:" prop="industry">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date"></DatePicker>
          </FormItem>
          <FormItem label="icp账号:" prop="industry">
            <Input v-model="formValidate.industry" ></Input>
          </FormItem>
          <FormItem label="icp密码:" prop="linkman">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date"></DatePicker>
          </FormItem>
          <FormItem label="icp备案号:" prop="industry">
            <Input v-model="formValidate.industry" ></Input>
          </FormItem>
        </Form>
      </Col>
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="网站名称:" prop="source">
            <Input v-model="formValidate.souce"></Input>
          </FormItem>
          <FormItem label="开始时间:" prop="type">
            <Input v-model="formValidate.type"></Input>
          </FormItem>
          <FormItem label="ftp地址:" prop="website">
            <Input v-model="formValidate.website" ></Input>
          </FormItem>
          <FormItem label="ftp账号:" prop="moblie">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date"></DatePicker>
          </FormItem>
          <FormItem label="ftp密码:" prop="moblie">

            <Input v-model="formValidate.website" ></Input>
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


    <!--<Row type="flex" justify="end" class="code-row-bg">-->

    <!--<Col span="24">-->
    <!--<Form :model="formValidate" :label-width="80">-->
    <!--<FormItem>-->
    <!--<Button type="primary" @click="handleSubmit('formValidate')">提交</Button>-->
    <!--<Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>-->
    <!--</FormItem>-->

    <!--</Form>-->
    <!--</Col>-->
    <!--</Row>-->

  </div>
</template>
<script>
  export default {
    data () {
      return {
        state:'',
        contType:'',
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
