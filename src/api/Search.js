import request from '@/utils/request'

export function getHosList (hosName, limit, curPage) {
  return request({
    url: 'hospital_data/query_hospital?hospital_name=' + hosName + '&itemCountOnOnePage=' + limit + '&pageIndex=' + curPage,
    method: 'get'
  })
}
