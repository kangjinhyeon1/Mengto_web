'use server'

import { cookies } from 'next/headers'
import { instance } from './interceptor'

export const DeleteWrite = async (id: number | undefined) => {
  const token = cookies().get('accessToken')

  return await instance({
    method: 'DELETE',
    url: `/user/write/delete`,
    headers: {
      Authorization: token?.value,
    },
    data: {
      writeId: id,
    },
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err.response.status
    })
}
