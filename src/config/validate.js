// 手机号验证
export function isValidPhone (str) {
  const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
  return reg.test(str)
}

export function isValidPwd (str) {
  const reg = /^[0-9a-zA-z]/
  return reg.test(str)
}
