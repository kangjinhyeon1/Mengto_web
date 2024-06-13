import { writeType } from '@/types'
import { instance } from './interceptor'

export const WriteAPI = async (data: writeType) => {
  return await instance({
    method: 'POST',
    url: `/user/write`,
    data: data,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err.response.status
    })
}
