import request from '@/utils/request'

export function search (region, hospital, depart, limit, curPage) {
  // console.log('in record api ')
  return request({
    url: 'hospital_data/query?region_name=' + region + '&hospital_name=' + hospital + '&department_name=' + depart + '&itemCountOnOnePage=' + limit + '&pageIndex' + curPage,
    method: 'get'
  })
}

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
    url: 'appointment/del?order_id=' + id,
    method: 'delete'
  })
}

export function config (orderMSg) {
  // console.log('in record api ')
  return request({
    url: 'appointment/new',
    method: 'post',
    data: orderMSg
  })
}
