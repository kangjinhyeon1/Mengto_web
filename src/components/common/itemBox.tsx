'use client'

import { dateToString } from '@/lib/dateToString'
import { itemType } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ItemBox({
  id,
  img,
  title,
  created_at,
  name,
  heart,
}: itemType) {
  const nav = useRouter()
  const [like, setLike] = useState<boolean>(false)

  return (
    <div
      onClick={() => nav.push(`/detail/${id}`)}
      className="w-[280px] flex flex-col border border-gray-300 rounded-md"
    >
      {img ? (
        <img className="h-[100px] object-cover" src={img} />
      ) : (
        <img className="h-[100px] object-cover bg-gray-100" />
      )}
      <div className="p-3">
        <p className="h-12 text-bodyLarge line-clamp-2">{title}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-bodyMeidum text-gray-400">{name}</p>
          <div className="flex gap-1">
            <p className="text-bodyMeidum text-gray-400">
              {dateToString(created_at)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
