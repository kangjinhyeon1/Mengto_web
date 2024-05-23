"use client"

import Header from "../common/header";
import { useRouter } from "next/navigation";

export default function DetailSection() {

    const route = useRouter();

    return (
        <div className="w-full flex flex-col items-center gap-12">
            <Header />
            <section className="flex flex-col w-[70%] gap-[25px]">
                <article className="flex flex-col gap-[20px]">
                    <div className="flex justify-between items-center">
                        <button className="p-2 border border-gray-100 rounded-lg">
                            <img src="/img/arrow.svg" />
                        </button>
                        <img src="/img/more.svg" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-titleLarge">오늘 송도에 갔다!</p>
                        <img src="/img/heart.svg" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-titleSmall text-gray-400">
                            <p>강진현</p>
                            <p>2024.04.12 </p>
                        </div>
                        <button onClick={() => route.back()} className="text-titleSmall text-gray-400 px-1 py-2 border border-gray-400 rounded-[5px] hover:transition-all hover:outline-none hover:text-main hover:border-main">질문하기</button>
                    </div>
                </article>
                <div className="w-full h-[1px] bg-gray-100" />
                <article>
                    <div>
                        <img></img>
                        아무내용이나 들어가지요 ^^
                    </div>
                </article>
            </section>
        </div>
    );
}