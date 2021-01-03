import request from '@/utils/request'

export function getHosList (hosName, limit, curPage) {
  return request({
    url: 'hospital_data/query_hospital?hospital_name=' + hosName + '&itemCountOnOnePage=' + limit + '&pageIndex=' + curPage,
    method: 'get'
  })
}

export function getDocDepartment (hosName) {
  return request({
    url: 'hospital_data/query_hospital_department?hospital_name=' + hosName,
    method: 'get'
  })
}

export function getDocList (docName, limit, curPage) {
  return request({
    url: 'hospital_data/query?doctor_name=' + docName + '&itemCountOnOnePage=' + limit + '&pageIndex=' + curPage,
    method: 'get'
  })
}

export function getSchedule (docName, hosName, dept) {
  return request({
    url: 'schedule?doctor_name=' + docName + '&hospital_name=' + hosName + '&department=' + dept,
    method: 'get'
  })
}
