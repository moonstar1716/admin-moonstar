import request from 'http' // 使用实例

//test 接口
export function test(params) {
  return request({
    url: '/tget',
    method: 'get',
    params
  })
}
