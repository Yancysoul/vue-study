<template>
  <div>
    <z-form :model="userinfo" :rules="rules" ref="form">
      <z-form-item label="用户名：" prop="username">
        <z-input v-model="userinfo.username" placeholder="请输入用户名"></z-input>
      </z-form-item>
      <z-form-item label="密码：" prop="password">
        <z-input type="password" v-model="userinfo.password" placeholder="请输入密码"></z-input>
      </z-form-item>
      <z-form-item>
        <button @click="login">登录</button>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
  import ZInput from '@/components/ZInput';
  import ZFormItem from '@/components/ZFormItem'
  import ZForm from '@/components/ZForm'
  export default {
    components: {
      ZInput,
      ZFormItem,
      ZForm
    },
    data() {
      return {
        userinfo: {
          username: 'admin',
          passwored: ''
        },
        rules: {
          username: [{ required: true, message: "请输入用户名称" }],
          password: [{ required: true, message: "请输入密码" }]
        }
      }
    },
    methods: {
      login() {
        this.$refs['form'].validate(valid => {
          // alert(valid ? '登录成功' : '登录失败')
          console.log(this.$notice);
          const notice = this.$notice({
            title: "登录请求",
            message: valid ? "登录成功!" : "校验失败!",
            duration: 2000
          });
          notice.show();
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>