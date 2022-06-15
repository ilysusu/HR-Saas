import request from '@/utils/request'

// 用户登录
export function login(data) {
  return request({
    method: 'post',
    url: '/sys/login',
    data
  })
}

export function getInfo(token) {
  return request({
  })
}

