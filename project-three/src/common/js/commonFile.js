// list全部展开以及缩回
export function initData (arr) {
  let quesArr = []
  if (!arr.length) return
  for (var i = 0; i < arr.length; i++) {
    quesArr.push(-1)
  }
  return quesArr
}

export function show (arr, val) {
  if (arr[val] === val) {
    return this.$set(arr, val, -1)
  } else if (arr[val] === -1) {
    return this.$set(arr, val, val)
  }
}
