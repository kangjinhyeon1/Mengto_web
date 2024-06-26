'use server'

import { writeType } from '@/types'
import { cookies } from 'next/headers'
import { instance } from './interceptor'

export const WriteAPI = async (data: writeType) => {
  const token = cookies().get('accessToken')

  return await instance({
    method: 'POST',
    url: `/user/write`,
    headers: {
      Authorization: token?.value,
    },
    data: data,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err.response.status
    })
}
