import request from '@/utils/request'

export function login (userInfo) {
  // console.log('in login api ', userInfo)
  return request({
    url: 'login',
    method: 'post',
    data: userInfo
  })
}
