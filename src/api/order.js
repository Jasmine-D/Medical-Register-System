import request from '@/utils/request'

export function present () {
  // console.log('in record api ')
  return request({
    url: '/appointment/get',
    method: 'get'
  })
}
