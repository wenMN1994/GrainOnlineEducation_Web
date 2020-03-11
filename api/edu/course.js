import request from '@/utils/request'
const api_name = '/front/course'
export default {
  getPageList(page, limit) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get'
    })
  },
  getById(courseId) {
    return request({
      url: `${api_name}/${courseId}`,
      method: 'get'
    })
  }
}
