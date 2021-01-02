import request from '@/utils/request'
export function register (userInfo) {
  console.log('in register api ', userInfo)
  return request({
    url: 'register',
    method: 'post',
    data: userInfo
  })
}
