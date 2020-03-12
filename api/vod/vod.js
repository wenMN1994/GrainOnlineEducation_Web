import request from '@/utils/request'
const api_name = '/vod'

export default {

  getPlayAuth(vid) {
    return request({
      url: `${api_name}/get-play-auth/${vid}`,
      method: 'get'
    })
  }

}
