import request from '@/utils/request'

// 用户登录
export function login(data) {
  return request({
    method: 'post',
    url: '/api/sys/login',
    data
  })
}

export function getInfo(token) {
  return request({
  })
}

