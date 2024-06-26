'use client'

import { GetMyData, GetWriteData } from '@/apis'
import { getCookie } from '@/lib/cookie'
import { itemType } from '@/types'
import { useEffect, useState } from 'react'
import Header from '../common/header'
import ItemBox from '../common/itemBox'
import Navigation from '../common/navigation'

export default function MainSection() {
  const [data, setData] = useState<itemType[]>([])
  const [to, setTo] = useState<boolean>(false)

  const getData = async () => {
    const res = await GetWriteData()
    const re = res.writeList.reverse()

    setData(re)

    const token = getCookie('accessToken')
    if (token) {
      const re = await GetMyData()
      if (re.mengto) {
        setTo(true)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full min-w-[50%] flex flex-col items-center">
      <Header />
      <Navigation to={to} />
      <div className="w-[70%] h-[2px] bg-gray-200 my-5" />
      <article className="w-[70%] mb-60 gap-4 flex items-center flex-wrap">
        {data.map((res) => {
          return (
            <ItemBox
              key={res.id}
              id={res.id}
              name={res.name}
              img={res.img}
              title={res.title}
              created_at={res.created_at}
              heart={false}
            />
          )
        })}
      </article>
    </div>
  )
}
