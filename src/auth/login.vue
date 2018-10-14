<template>
  <div class="contarint">
    <div class="loginForm">

      <div class="loginTitle">

      </div>
      <div style="text-align: center;font-size: 30px">
        <span>Freeze</span>
      </div>
      <Form style="padding: 20px" ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" size="large" clearable placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" style="margin-bottom: 0px">
          <Input type="password" v-model="formInline.password" size="large" @keyup.enter="handleSubmit('formInline')" clearable placeholder="密码">

            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
          <span class="hitspan">忘记密码?<router-link  to="/reset">点击重置</router-link></span>
        </FormItem>
        <FormItem >
          <Button type="primary" style="width:100% " size="large" @click="handleSubmit('formInline')">登陆</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名.', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码.', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
<style scoped>

  .loginForm {
    width: 350px;
    height: 250px;
    position: absolute;
    top:-300px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

  }

  .loginTitle {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: auto;
    background-image: url("../../static/image/Luffy.jpg");
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }

  .contarint {
    width: 100%;
    height: 100%;
    background-image: url('../../static/image/bg.jpg');
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;

  }
  .hitspan{
    float: right;
    color: #e73243;
  }

</style>
