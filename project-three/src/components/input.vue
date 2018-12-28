<template>
    <section>
        <div :class="['Corp-phone',{'bd-b': !thipsShow},{'gbd-b': thipsShow},'h152']" v-if="!switchover && !isCode">
          <p :class="['pa','ft_lightGreen']" v-show="thipsShow">{{tips}}</p>
          <input class="input-style ft_black" :type="type" :placeholder="prompt" v-model="information" :maxlength="maxlength" @keyup='verify' @focus="clearIcon('get')" @blur="clearIcon('lose')">
          <i v-show="clearButton" :class="['sweepIcon']" @click="eliminate($event)"></i>
      </div>
      <div :class="['Corp-phone',{'bd-b': !thipsShow},{'gbd-b': thipsShow},'h152']" v-if="switchover && !isCode">
          <p class="pa ft_lightGreen" v-show="thipsShow">{{tips}}</p>
          <input class="input-style ft_black" :type="personageVisible?'text':'password'" :placeholder="prompt" v-model="information" :maxlength="maxlength" @keyup='verify' @focus="clearIcon('get')" @blur="clearIcon('lose')">
          <i v-show="clearButton" :class="['sweepIcon',{'pa-r':switchover}]" @click="eliminate($event)"></i>
          <i v-if="switchover" :class="[{'visibleIcon':personageVisible},{'maskIcon':!personageVisible}]" @click="isShow"></i>
      </div>
      <div :class="['verify-code',{'bd-b': !thipsShow},{'gbd-b': thipsShow},'h152']" v-if="isCode">
        <div class="fl verify-code-content iconPlace">
          <p class="pa ft_lightGreen"  v-show="thipsShow">{{tips}}</p>
          <input class="input-style ft_black fl" type="tel" :placeholder="prompt" v-model="information" :maxlength="maxlength"  oninput="if(value.length>11)value=value.slice(0,11)" @keyup='verify' @focus="clearIcon('get')" @blur="clearIcon('lose')">
          <i v-if="clearButton" :class="['sweepIcon',{'pa-r':switchover}]" @click="eliminate($event)" @focus="clearIcon" @blur="clearIcon"></i>
        </div>
        <span :class="['fr','mgt88','bd-l',{'ft_emeraldGreen':isClick},{'ft_lightGray':!isClick}]" @click="getCode">{{codeText}}</span>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    reg: {
      default: ''
    },
    prompt: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    },
    switchover: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    maxlength: {
      type: Number,
      default: 11
    },
    isCode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      personageVisible: false,
      thipsShow: false,
      clearButton: false,
      information: '',
      isClick: true,
      codeText: '获取验证码',
      atimer: '', // 定时器ID
      isSend: true
    }
  },
  destroyed() {
    clearTimeout(this.atimer)
  },
  watch: {
    information: function(val) {
      this.$emit('affair', this.information)
      if (val != '') {
        this.thipsShow = true
        this.clearButton = true
      } else if (val === '') {
        this.thipsShow = false
        // this.clearButton = false
      }
    }
  },
  // 实例初始化最之前，无法获取到data里的数据
  beforeCreate() {},
  // 在挂载开始之前被调用
  beforeMount() {},
  // 已成功挂载，相当ready()
  mounted() {},
  // 相关操作事件
  methods: {
    isShow() {
      this.personageVisible = !this.personageVisible
    },
    clearIcon(type) {
      if(type === 'get'){
        if(this.information !== ''){
          this.clearButton = true
        }
      }else if(type === 'lose') {
        this.clearButton = false
      }
      
    },
    // 校验数据
    verify() {
      this.$emit('verify')
    },
    eliminate(e) {
      this.information = ""
      this.clearButton = false
      e.target.previousElementSibling.focus()
    },
    getCode() {
      if (this.isSend) {
        this.$emit('getCode', this.countDown)
      }
    },
    countDown(time) {
      this.isClick = false
      let _this = this
      if (time <= 0) {
        _this.isClick = true
        _this.isSend = true
        clearTimeout(_this.atimer)
        _this.codeText = '获取验证码'
        return
      } else {
        time = time - 1
        _this.codeText = '重新获取' + time + 's'
      }
      setTimeout(function() {
        _this.countDown(time)
      }, 1000)
    }
  }
}
</script>

<style>
</style>
