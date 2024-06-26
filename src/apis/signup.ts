'use server'

import { signupType } from '@/types'
import { instance } from './interceptor'

export const SignupAPI = async (data: signupType) => {
  return await instance({
    method: 'POST',
    url: `/auth/signup`,
    data: data,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      return err.response.status
    })
}
