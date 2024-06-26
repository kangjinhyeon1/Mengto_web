'use client'

import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import { BeatLoader } from 'react-spinners'
import {
  ChangeEvent,
  Dispatch,
  forwardRef,
  SetStateAction,
  useMemo,
  useRef,
  useState,
} from 'react'
import axios from 'axios'

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>
  onContent: Dispatch<SetStateAction<string>>
  onImg: Dispatch<SetStateAction<string | undefined>>
}

const colors = [
  'transparent',
  'white',
  'red',
  'yellow',
  'green',
  'blue',
  'purple',
  'gray',
  'black',
]
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'color',
  'image',
  'background',
  'align',
]

const Editor = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill')
    const { QuillImageResize } = await import('../../lib/resize')
    QuillComponent.Quill.register('modules/imageResize', QuillImageResize)

    const ReactQuillComponent = forwardRef<ReactQuill, ForwardedQuillComponent>(
      ({ forwardedRef, onContent, onImg, ...props }) => {
        const fileInput = useRef<HTMLInputElement | null>(null)
        const quillRef = useRef<ReactQuill | null>(null)
        const [img, setImg] = useState<boolean>(false)
        async function changeHandler(event: ChangeEvent<HTMLInputElement>) {
          if (fileInput.current?.files) {
            const files: FileList = fileInput.current.files
            const formData = new FormData()

            for (let i = 0; i < files.length; i++) {
              const file = files[i]
              formData.append('img', file)
            }

            try {
              const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/img`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } },
              )

              if (!img) {
                onImg(res.data.img)
                setImg(true)
              }

              if (typeof forwardedRef !== 'function') {
                const edit = quillRef.current?.getEditor()
                const range = edit?.getSelection()
                if (range && edit) {
                  edit.insertEmbed(range?.index, 'image', res.data.img)
                }
              }
            } catch (error) {
              console.error(error)

              return error
            }
          }

          return
        }

        const modules = useMemo(
          () => ({
            toolbar: {
              container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ align: ['right', 'center', 'justify'] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                [{ color: colors }],
                [{ background: colors }],
              ],
              handlers: {
                image: () => {
                  fileInput.current?.click()
                },
              },
            },
            imageResize: {
              parchment: QuillComponent.Quill.import('parchment'),
              modules: ['Resize', 'DisplaySize'],
            },
          }),
          [],
        )

        return (
          <div>
            <input
              type="file"
              ref={fileInput}
              accept="image/*"
              onChange={changeHandler}
              hidden
            />
            <QuillComponent
              className="h-[60vh]"
              ref={quillRef}
              formats={formats}
              modules={modules}
              onChange={onContent}
              {...props}
            />
          </div>
        )
      },
    )

    return ReactQuillComponent
  },
  {
    loading: () => (
      <div className="flex justify-center items-center fixed left-0 top-0 w-full h-full bg-white">
        <BeatLoader color="rgba(54, 215, 183, 1)" />
      </div>
    ),
    ssr: false,
  },
)

export default Editor
