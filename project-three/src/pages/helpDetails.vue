<template>
  <div id="app" class="help-center">
    <div class="problem-list bg_white">
      <ul>
        <li v-for="(item, index) in questionList" :key="index" :class=" index == 0 ? '' : 'bd-t' ">
          <div class="clearfix ft30 p_re ft_black" @click="show(listArr, index)">
            <span>{{item.questionTitle}}</span>
            <!-- 收起在help-icon 增加class rotate -->
            <span class="help-icon help-down-icon fr p_ab" :class="{'arrow-rotating': listArr[index] === index}"></span>
            <div v-html="item.wechatDesc" class="help-item-con ft28 ft_gray" v-show="listArr[index] === index"
                 ref="expand"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { RESP_CODE } from '../assets/js/http/config'
  import { queryQuestion } from '../assets/js/api/operation'
  import { initData, show } from '../common/js/commonFile'

  export default {
    data () {
      return {
        questionTitle: '',
        wechatDesc: '',
        listArr: [],
        questionList: [],
        show: show,
        current: 0
      }
    },
    // 实例初始化最之前，无法获取到data里的数据
    beforeCreate () {},
    // 在挂载开始之前被调用
    beforeMount () {},
    // 已成功挂载，相当ready()
    mounted () {},
    created () {
      this.getDataList()
    },
    // 相关操作事件
    methods: {
      async getDataList () {
        let prams = {
          typeId: this.$route.query.typeId,
          questionStatus: '1,Z',
          sortType: 'question_sort'
        }
        try {
          const res = await queryQuestion(prams)
          if (res.retCode === RESP_CODE.SUCCESS) {
            this.questionList = res.jsonBody.questionList
            this.listArr = initData(this.questionList)
          }
        } catch (e) {
          throw e
        }
      }
    }
  }
</script>
