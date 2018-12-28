<template>
  <div class="warn" v-if="isShow">
      <div class="supernatant"></div>
      <div class="tips">
          <div :class="['icon',status ? 'icon-succeed' : 'icon-defeated']"></div>
          <div class="centent-text">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      status: true
    };
  },
  watch: {
      isShow(val) {
        let _this = this;
        if(val){
            setTimeout(function() {
                _this.isShow = false;
            }, 2000);
        }
      }
  },
  components: {
    // XHeader
  },
  // 实例初始化最之前，无法获取到data里的数据
  beforeCreate() {},
  // 在挂载开始之前被调用
  beforeMount() {},
  // 已成功挂载，相当ready()
  mounted() {},
  // 相关操作事件
  methods: {}
};
</script>

<style lang="stylus">
@import '../../assets/css/style-Variate.styl';

.warn .supernatant {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.warn .tips {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 368px;
    background-color: $white;
    border-radius: 8px;
    box-shadow: 0 2px 8px 0 $lime;
    transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    padding: 64px 0 84px 0;
}

.warn .tips .icon {
    width: 144px;
    height: 144px;
    margin: 0 auto;
    margin-bottom: 48px;
}

.warn .tips .icon-succeed {
    background: url('../../assets/images/succeed.png') no-repeat center center;
    background-size: 100% 100%;
}

.warn .tips .icon-defeated {
    background: url('../../assets/images/defeated.png') no-repeat center center;
    background-size: 100% 100%;
}

.warn .tips .centent-text {
    font-size: 34px;
    color: $emeraldGreen;
    text-align: center;
    line-height: 50px;
}
</style>
