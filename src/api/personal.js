import request from '@/utils/request'
export function record () {
  // console.log('in record api ')
  return request({
    url: 'medical_records/query_record_by_user_id',
    method: 'get'
  })
}

export function pres () {
  // console.log('in record api ')
  return request({
    url: 'medical_records/get_prescription_by_user_id',
    method: 'get'
  })
}

export function change (pwd) {
  // console.log('in record api ')
  return request({
    url: 'changepassword',
    method: 'put',
    data: pwd
  })
}
