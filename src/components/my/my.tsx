'use client'

import { GetMyData } from '@/apis'
import { myType } from '@/types'
import { useEffect, useState } from 'react'
import Header from '../common/header'
import ItemBox from '../common/itemBox'

export const MyPage = () => {
  const [data, setData] = useState<myType>()

  const getMy = async () => {
    const res = await GetMyData()

    if (res === 401) {
      console.log('토큰문제입니다.')
    }

    setData(res)
  }

  useEffect(() => {
    getMy()
  }, [])

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Header />
      <main className="flex flex-col w-[70%] gap-10 mt-10">
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <p className="text-titleLarge">{data?.name}</p>
            <div className="text-titleLarge text-gray-50 px-7 py-1 bg-main rounded-3xl">
              {data?.mengto ? '멘토' : '멘티'}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-titleMedium">한 줄 소개</p>
            <p className="text-bodyMedium">{data?.introduce}</p>
          </div>
        </section>
        <div className="w-full h-[1px] bg-gray-200" />
        <section className="flex flex-col gap-8 mb-60">
          <p className="text-titleMedium">
            {data?.mengto ? '작성한 커리큘럼' : '좋아요한 커리큘럼'}
          </p>
          <article className="w-[100%] gap-4 flex items-center flex-wrap">
            {data?.curriculum.map((res) => {
              return (
                <ItemBox
                  key={res.id}
                  id={res.id}
                  img={res.img}
                  name={res.name}
                  title={res.title}
                  content={res.content}
                  created_at={res.created_at}
                  heart={true}
                />
              )
            })}
          </article>
        </section>
      </main>
    </div>
  )
}
