import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/xgy/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/xgy/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/xgy/user/logout',
    method: 'post'
  })
}
