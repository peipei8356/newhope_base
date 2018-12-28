<template>
  <div class="page">
    hello,{{title}},how are you?2222
    <c-header></c-header>
    <m-header></m-header>
  </div>
</template>

<script type="text/ecmascript-6">
  import CHeader from './components/Header/header.vue'
  import MHeader from 'publicComponent/base/Header/header.vue'

  export default {
    data () {
      return {
        title: 'zhangsan'
      }
    },
    components: {
      MHeader,
      CHeader
    },
    created () {
      console.log(CHeader)
      console.log(MHeader)
    },
    methods: {}
  }
</script>

<style rel="stylesheet/css">

</style>
