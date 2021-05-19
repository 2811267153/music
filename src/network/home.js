import { request } from "./axios.js";

export function getLogin(phone, password) {
    return request({
        url: '/login/cellphone',
        params: {
            phone,
            password
        }
    })
}

export function getRecommendedsongs(){
  return request({
    url: '/personalized/newsong',
  })
}

export function getBanner(type){
  return request({
    url: '/banner',
    params: {
      type
    }
  })
}

export function getVideo(offset){
  return request({
    url: '/video/timeline/recommend',
    params: {
      offset
    }
  })
}

export function getHistoryRrecord(uid){
  return request({
    url: '/user/record',
    params: {
      uid
    }
  })
}

export function getDigAlbum(uid){
  return request({
    url: '/digitalAlbum/purchased',
    params: {
      uid
    }
  })
}
