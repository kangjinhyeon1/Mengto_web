'use server'

import { instance } from './interceptor'

export const GetWriteData = async () => {
  return await instance({
    method: 'GET',
    url: `/user/list`,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err.response.status
    })
}
