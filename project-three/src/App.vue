<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import './assets/css/common.css'
  import init from './assets/js/wechat-sdk'

  export default {
    name: 'app',
    data () {
      return {
        title: 'hello'
      }
    },
    async created () {
      await init()
    },
    components: {
    }
  }
</script>

<style lang="stylus">
  @import './common/css/style.styl'
</style>
