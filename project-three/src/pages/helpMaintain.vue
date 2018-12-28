<template>
  <div id="app" class="maintain-bg bg_white">
    <!--正在维护-->
    <div class="help-center tc" v-show="!underMaintenance">
      <img src="../common/images/maintain_2x.png"
           srcset="../common/images/maintain_2x.png 750w, ../common/images/maintain_3x.png 1125w "
           size="(max-width: 750px) 750px, 1125px" alt="维护中" class="under-main">
      <p class="help-maintain ft34 ft_gray help-maintain-contact">帮助中心正在维护</p>
      <p class="ft_gray ft30 help-maintain-contact">如需帮助，请联系客户经理</p>
      <a href="tel:021-51821915">
        <p class="help-tel-spacing ft30 ft_blue help-maintain-tel">021-51821915</p>
      </a>
      <p class="ft26 ft_lightGray help-maintain-tel">服务时间：9:00-18:00 (工作日)</p>
    </div>
    <!--网络连接异常，请检查手机是否联网-->
    <div class="help-center tc" v-show="networkAnomaly">
      <img src="../common/images/network_anomaly_2x.png"
           srcset="../common/images/network_anomaly_2x.png 750w, ../common/images/network_anomaly_3x.png 1125w "
           size="(max-width: 750px) 750px, 1125px" alt="网络异常" class="under-main">
      <p class="help-maintain ft34 ft_gray help-maintain-contact">网络连接异常，请检查手机是否联网</p>
      <div class="help-button">
        <button class="help-maintain-button tc ft30">点击刷新</button>
      </div>
    </div>
    <!--暂时出了些状况，请稍后再试-->
    <div class="help-center tc" v-show="wrong">
      <img src="../common/images/wrong_2x.png"
           srcset="../common/images/wrong_2x.png 750w, ../common/images/wrong_3x.png 1125w "
           size="(max-width: 750px) 750px, 1125px" alt="出状况" class="under-main">
      <p class="help-maintain ft34 ft_gray help-maintain-contact">暂时出了些状况，请稍后再试</p>
    </div>
    <!--访问人数太多，请稍后再试-->
    <div class="help-center tc" v-show="manyPeople">
      <img src="../common/images/wrong_2x.png"
           srcset="../common/images/wrong_2x.png 750w, ../common/images/wrong_3x.png 1125w "
           size="(max-width: 750px) 750px, 1125px" alt="系统繁忙" class="under-main">
      <p class="help-maintain ft34 ft_gray help-maintain-contact">访问人数太多，请稍后再试</p>
    </div>
    <!--找不到页面，去看看别的吧-->
    <div class="help-center tc" v-show="notFound">
      <img src="../common/images/not_found_2x.png"
           srcset="../common/images/not_found_2x.png 750w, ../common/images/not_found_3x.png 1125w "
           size="(max-width: 750px) 750px, 1125px" alt="页面不存在" class="under-main">
      <p class="help-maintain ft34 ft_gray help-maintain-contact">找不到页面，去看看别的吧</p>
    </div>
    <!--暂无记录-->
    <div class="help-center tc" v-show="noRecord">
      <img src="../common/images/no_record_2x.png"
           srcset="../common/images/no_record_2x.png 750w, ../common/images/no_record_3x.png 1125w "
           size="(max-width: 750px) 750px, 1125px" alt="页面不存在" class="under-main">
      <p class="help-maintain ft34 ft_gray help-maintain-contact">暂无记录</p>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        underMaintenance: false,
        networkAnomaly: false,
        wrong: false,
        manyPeople: false,
        notFound: false,
        noRecord: false
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
