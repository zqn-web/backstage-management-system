<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
      </div>
      <el-form :model="form"  ref="form" label-width="80px" >
        <el-form-item
          label="用户名"
          prop="userName"
          :rules="[
            { required: true, message: '请输入用户名', trigger: 'blur'},
            {
              min: 4,
              max: 10,
              message: '用户名长度再4-10之间',
              trigger: 'blur'
            }
          ]"
        >
          <el-input type="text" v-model="form.userName" ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
              min: 6,
              max: 12,
              message: '用户名长度再6-12之间',
              trigger: 'blur'
            }
          ]"
        >
          <el-input type="password" v-model="form.password" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
        } else {
          console.error(this.form)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #409EFF;
  .box-card {
    width: 450px;
    margin: 200px auto;
    .el-card__header {
      font-size: 22px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
