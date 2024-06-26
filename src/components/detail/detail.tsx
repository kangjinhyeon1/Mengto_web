'use client'

import Header from '../common/header'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GetWriteDetail } from '@/apis'
import { itemType } from '@/types'
import { dateToString } from '@/lib/dateToString'
import { DeleteModal } from '../common/modal'

export default function DetailSection({ id }: { id: number }) {
  const route = useRouter()
  const [data, setData] = useState<itemType>()
  const [modal, setModal] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(false)

  const getData = async () => {
    const res = await GetWriteDetail(id)
    setData(res.writeData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {modal && <DeleteModal click={setModal} postId={data?.id} />}
      <div className="w-full flex flex-col items-center gap-12">
        <Header />
        <section className="flex flex-col w-[70%] gap-[25px]">
          <article className="flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
              <button
                onClick={() => route.back()}
                className="p-2 border border-gray-100 rounded-lg"
              >
                <img src="/img/arrow.svg" />
              </button>
              <img src="/img/more.svg" onClick={() => setModal(true)} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-titleLarge">{data?.title}</p>
              {like === false ? (
                <img src="/img/heart.svg" onClick={() => setLike(true)} />
              ) : (
                <img
                  src="/img/fillheart.svg"
                  className="w-[32px]"
                  onClick={() => setLike(false)}
                />
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-titleSmall text-gray-400">
                <p>{data?.name}</p>
                <p>{dateToString(String(data?.created_at))}</p>
              </div>
              {/* <button className="text-titleSmall text-gray-400 px-1 py-2 border border-gray-400 rounded-[5px] hover:transition-all hover:outline-none hover:text-main hover:border-main">
              질문하기
            </button> */}
            </div>
          </article>
          <div className="w-full h-[1px] bg-gray-100" />
          <article className="mt-[100px]">
            {data && (
              <div dangerouslySetInnerHTML={{ __html: String(data.content) }} />
            )}
          </article>
        </section>
      </div>
    </>
  )
}
