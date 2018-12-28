import { Toast } from 'mint-ui'

const toast = function (opt) {
  let option = {
    position: 'top'
  }
  if (typeof opt === 'object') {
    Object.assign(option, opt)
  } else if (typeof opt === 'string') {
    option.message = opt
  }
  Toast(option)
}
export default toast
