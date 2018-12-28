<template>
  <span @click="openAlert">注册成功</span>

</template>

<script>
  import { MessageBox } from 'mint-ui'

  export default {
    data () {
      return {
        showUserSecret: false
      }
    },
    // 实例初始化最之前，无法获取到data里的数据
    beforeCreate () {},
    // 在挂载开始之前被调用
    beforeMount () {},
    // 已成功挂载，相当ready()
    mounted () {
    },
    components: {
      alert
    },
    // 相关操作事件
    methods: {
      openAlert () {
        /* 两个btn */
        MessageBox({
          title: '',
          /* 两个btn单行 */
          message: '确定执行此操作',
          /* 两个btn两行或多行 */
          /* message:'您的密码输入错误，再次输错账户将被锁定', */
          /* 特殊情况 */
          /* message: '<div class="mint-wrong-password">您的身份证已过期</div>'+'<p class="mint-wrong-password">如需帮助，请联系客户经理</p>'+'<p class="mint-tel">021-51821915</p>'+' <p class="mint-service-time">服务时间：9:00-18:00 (工作日)</p>', */
          showCancelButton: true
          /* confirmButtonText: '拨打电话' */
        })
        /* .then(action => {
                     if (action === 'confirm') {
                         window.location.href = "tel:021-51821915"
                     }
                 }) */
        //            /*一个btn
        //          MessageBox.alert('您的密码输入错误，再次输错账户将被锁定').then(action => {
        //
        //          });
      }

    }
  }
</script>
