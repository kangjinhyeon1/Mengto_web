'use server'

import { instance } from './interceptor'

export const GetWriteDetail = async (id: number) => {
  return await instance({
    method: 'GET',
    url: `/user/write/${id}`,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err.response.status
    })
}
