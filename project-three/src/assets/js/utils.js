export function getParam (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export const deepClone = obj => JSON.parse(JSON.stringify(obj))

export function lazyLoadJs (url) {
  let allJS = document.getElementsByTagName('script')
  let isFirst = true
  for (let i = 0, l = allJS.length - 1; i <= l; i++) {
    if (allJS[i].getAttribute('src') === url) {
      isFirst = false
      break
    }
  }
  if (isFirst) {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.defer = true
      script.src = url
      document.body.appendChild(script)
      script.onload = () => resolve()
      script.onerror = (e) => reject(e)
    })
  }
}

// 防抖函数
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  let later = () => {
    // 据上一次触发时间间隔
    let last = new Date().getTime() - timestamp
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) {
          context = args = null
        }
      }
    }
  }
  return function () {
    context = this
    args = arguments
    timestamp = new Date().getTime()
    let callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

export const reg = {
  matchATag: /<a[^<>]+>.+?<\/a>/gi, // 匹配A标签
  filterATag: /(<\/?a.*?>)/g, // 去除A标签
  pwdLength: /^.{6,20}$/,
  numStr: /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/,
  isChinaName: /^[\u4E00-\u9FA5]{1,6}$/,
  identityNo: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  bankCard: /^\d{16}|\d{19}$/,
  phone: /^(13[0-9]|14[579]|15[0-3,5-9]|166|17[0135678]|18[0-9]|19[89])\d{8}$/,
  decimal: /^\d+\.?(\d{1,2})?$/,
  verifyNumImgCode: /^[0-9]{4}$/, // 数字图形验证码
  verifyImgCode: /^(?![0-9]+$)|(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/,
  verifySmsCode: /^[0-9]{6}$/,
  verifyPwd: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, // 8-16位数字和字母组合密码
  verifyAccount: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/, // 4-20位数字和字母组合账号
  verifyLedger: /^[0-9a-zA-Z\u4e00-\u9fa5]{4,20}$/ // 只能含有数字，字母或者汉字的账号
}

// 是否空对象
export function isEmptyObject (obj) {
  return Object.keys(obj).length === 0
}
