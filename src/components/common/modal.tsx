import { DeleteWrite } from '@/apis'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useRef } from 'react'

interface LoginModalType {
  click: Dispatch<SetStateAction<boolean>>
  postId: number | undefined
}

export const DeleteModal = ({ click, postId }: LoginModalType) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const route = useRouter()

  const handleDeleteApplication = async () => {
    const res = await DeleteWrite(postId)
    console.log(res)
    route.push('/')
  }

  return (
    <section className="w-screen h-screen fixed bg-modalBackground backdrop-blur-sm top-0 z-40">
      <article
        ref={modalRef}
        onClick={(e) => (e.target === modalRef.current ? click(false) : '')}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="flex flex-col p-10 rounded-3xl bg-white gap-10">
          <div className="flex flex-col gap-3 w-[25vw] min-w-64">
            <div className="flex justify-between">
              <div className="p-3 bg-criticalBackground border border-criticalMiddle rounded-xl">
                <img src="/img/delete.svg" />
              </div>
              <div onClick={() => click(false)}>
                <img src="/img/close.svg" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-titleMedium">커리큘럼 삭제</p>
              <p className="text-bodySmall text-gray600">
                커리큘럼을 삭제하시면 복구가 불가능해요.
              </p>
            </div>
            <div className="flex gap-3 mt-7">
              <button
                className="w-full h-10 border border-gray-100 rounded-lg"
                onClick={() => click(false)}
              >
                취소
              </button>
              <button
                onClick={handleDeleteApplication}
                className="w-full h-10 border border-gray-100 rounded-lg"
              >
                커리큘럼 삭제하기
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
