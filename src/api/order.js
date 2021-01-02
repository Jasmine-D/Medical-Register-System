import request from '@/utils/request'

export function present () {
  // console.log('in record api ')
  return request({
    url: '/appointment/get',
    method: 'get'
  })
}

export function cancel (id) {
  // console.log('in record api ')
  return request({
    url: 'appointment/del',
    method: 'delete',
    data: {
      order_id: id
    }
  })
}
