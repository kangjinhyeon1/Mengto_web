'use server'

import { cookies } from 'next/headers'
import { instance } from './interceptor'

export const GetMyData = async () => {
  const token = cookies().get('accessToken')

  return await instance({
    method: 'GET',
    url: `/user/my`,
    headers: {
      Authorization: token?.value,
    },
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err.response.status
    })
}
