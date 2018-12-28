<template>
  <div class="foot">
    <ul class="nav">
      <li><a href="index.html#/index">首页</a></li>
      <li><a href="my-account.html#/myAccounnt">我的账户</a></li>
      <li><a href="personal-message.html#/certified">实名认证</a></li>
      <li><a href="sign-up.html#/step">签约流程</a></li>
      <li><a href="login.html#/login">登录</a></li>
      <li><a href="login.html#/register">注册</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {
      // XHeader
    },
    props: {
      headfont: {
        type: String,
        default: ''
      }
    },
    // 实例初始化最之前，无法获取到data里的数据
    beforeCreate () {},
    // 在挂载开始之前被调用
    beforeMount () {},
    // 已成功挂载，相当ready()
    mounted () {},
    // 相关操作事件
    methods: {}
  }
</script>

<style>

</style>
