<template>
  <div id="app">
    <div class="help-center">
      <img class="help-center-bg" src="../common/images/help_bg_2x.png"
           srcset="../common/images/help_bg_2x.png 750w, ../common/images/help_bg_3x.png 1125w "
           size="(max-width: 750px) 750px, 1125px" alt="背景图片">
      <div class="help-center-list bg_white">
        <div class="help-problem ft30 ft_brightGreen">
          <div class="help-problem-active">常见问题</div>
        </div>
        <div class="problem-list">
          <ul>
            <li class="bd-t" v-for="(item, index) in topContent" :key="index">
              <div class="clearfix ft30 p_re ft_black" @click="show(listArr, index)">
                <span>{{item.questionTitle}}</span>
                <!-- 收起在help-icon 增加class rotate -->
                <span class="help-icon help-down-icon fr p_ab"
                      :class="{'arrow-rotating': listArr[index] === index}"></span>
                <div v-html="item.wechatDesc" class="help-item-con ft28 ft_gray" v-show="listArr[index] === index"
                     ref="expand">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="help-center-list bg_white">
        <div class="help-problem ft30 ft_brightGreen">
          <div class="help-problem-active">问题分类</div>
        </div>
        <div class="problem-list">
          <ul>
            <li class="bd-t" v-for="item in questionList">
              <router-link :to="{name:'helpDetails',query:{typeId:item.typeId}}">
                <div class="clearfix ft30 p_re ft_black">
                  <span>{{item.typeName}}</span>
                  <span class="help-icon help-left-icon fr p_ab"></span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="help-footer tc">
        <a href="tel:021-51821915" class="ft_gray ft24">
          <p>如有更多问题，请联系客户经理 <span class="ft_blue"> 021-51821915</span></p>
          <p>服务时间：09:00-18:00 (工作日)</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { RESP_CODE } from '../assets/js/http/config'
  import { queryQuestion, queryQstType } from '../assets/js/api/operation'
  import { initData, show } from '../common/js/commonFile'

  export default {
    data () {
      return {
        questionList: [],
        typeList: [],
        listArr: [],
        show: show,
        topContent: []
      }
    },
    // 实例初始化最之前，无法获取到data里的数据
    beforeCreate () {},
    // 在挂载开始之前被调用
    beforeMount () {},
    // 已成功挂载，相当ready()
    mounted () {},
    // 相关操作事件
    // 实例初始化最之前，无法获取到data里的数据
    created () {
      this.getDataList()
      this.dataTypeList()
    },
    methods: {
      // 查询问题分类
      async dataTypeList () {
        let prams = {
          typeStatus: '1',
          isTop: '1',
          belongSystemId: '201804201121398430651040001'
        }
        try {
          const res = await queryQstType(prams)
          if (res.retCode === RESP_CODE.SUCCESS) {
            this.typeList = res.jsonBody.typeList
            this.particulars()
          }
        } catch (e) {
          throw e
        }
      },
      // 常见问题 typeId
      particulars () {
        for (let item in this.typeList) {
          this.detailsList(this.typeList[item].typeId)
        }
      },
      // 常见问题详情
      async detailsList (val) {
        let prams = {
          typeId: val,
          isTop: '1',
          questionStatus: '1,Z',
          sortType: 'question_sort'
        }
        try {
          const res = await queryQuestion(prams)
          if (res.retCode === RESP_CODE.SUCCESS) {
            this.topContent = res.jsonBody.questionList
            this.listArr = initData(this.topContent)
          }
        } catch (e) {
          throw e
        }
      },
      // 查询问题分类列表
      async getDataList () {
        let prams = {
          typeStatus: '1',
          isTop: '0',
          sortType: 'question_sort',
          belongSystemId: '201804201121398430651040001'
        }
        try {
          const res = await queryQstType(prams)
          if (res.retCode === RESP_CODE.SUCCESS) {
            this.questionList = res.jsonBody.typeList
          }
        } catch (e) {
          throw e
        }
      }
    }
  }
</script>
