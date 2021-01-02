import request from '@/utils/request'

export function login (phone, pwd) {
    console.log('in login api ', phone, pwd)
    return request({
      url: 'login',
      method: 'post',
      data: {
        id: phone,
        password: pwd
      }
    })
  }