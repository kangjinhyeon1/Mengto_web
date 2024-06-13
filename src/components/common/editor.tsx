"use client"

import 'react-quill/dist/quill.snow.css';
import { useMemo, useRef, useState, useEffect, ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import ReactQuill from 'react-quill';

const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'color',
    'background',
    'size',
    'h1',
    'ima'
];

const Editor = dynamic(
    async () => {
        const { default: QuillComponent } = await import("react-quill");
        const { QuillImageResize } = await import("@/lib/resize");
        QuillComponent.Quill.register("modules/imageResize", QuillImageResize);

        const ReactQuillComponent = () => {

            const fileInput = useRef<HTMLInputElement | null>(null);

            // async function changeHandler(event: ChangeEvent<HTMLInputElement>) {
            //     if (fileInput.current?.files) {
            //         const files: FileList = fileInput.current.files;
            //         const formData = new FormData();

            //         for (let i = 0; i < files.length; i++) {
            //             const file = files[i];
            //             formData.append("file", file, file.name);
            //         }

            //         try {
            //             const res = await api.post("/api/main/image-upload/", formData, {
            //                 headers: {
            //                     "Content-Type": "multipart/form-data",
            //                 },
            //             });
            //             if (typeof forwardedRef !== "function") {
            //                 const editor = (forwardedRef?.current as ReactQuill).getEditor();

            //                 res.data.forEach((imgUrl: string) => {
            //                     const range = editor.getSelection();
            //                     const index = range ? range.index : 0;
            //                     editor.insertEmbed(index, "image", `${process.env.NEXT_PUBLIC_API_URL + imgUrl}`);

            //                     editor.setSelection(index + 1);
            //                 });
            //             }
            //         } catch (error) {
            //             console.error(error);

            //             return error;
            //         }
            //     }

            //     return;
            // }

            const modules = useMemo(() => {
                return {
                    toolbar: {
                        container: [
                            [{ size: ['small', false, 'large', 'huge'] }],
                            [{ align: [] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['image'],
                            [
                                {
                                    color: [],
                                },
                                { background: [] },
                            ],
                        ],
                    },
                    // imageResize: {
                    //     parchment: QuillComponent.Quill.import("parchment"),
                    //     modules: ["Resize", "DisplaySize"],
                    // },
                };
            }, []);

            return (
                <ReactQuill
                    formats={formats}
                    modules={modules}
                    placeholder="커리큘럼을 작성해주세요"
                    className='w-full h-[55vh]'
                />
            );
        };

        return ReactQuillComponent;
    },
    {
        ssr: false,
    },
);

export default Editor;
