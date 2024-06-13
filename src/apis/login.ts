'use server'

import { loginType } from '@/types'
import { cookies } from 'next/headers'
import { instance } from './interceptor'

export const LoginAPI = async (data: loginType) => {
  return await instance({
    method: 'POST',
    url: `/auth/login`,
    data: data,
  })
    .then((response) => {
      const token = response.data.accessToken
      cookies().set('accessToken', token)
      return response.status
    })
    .catch((err) => {
      return err.response.status
    })
}
