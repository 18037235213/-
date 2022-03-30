<template>
  <div class="login-container">
    <div>111</div>
  </div>
</template>

<script>
// import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // async onSubmit () {
    //   const user = this.user
    //   try {
    //     const res = await login(user)
    //     console.log('登录成功', res)
    //   } catch (err) {
    //     if (err.response.status === 400) {
    //       console.log('手机号或验证码错误')
    //     } else {
    //       console.log('登录失败，请稍后重试', err)
    //     }
    //   }
    // }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }

  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }

  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
