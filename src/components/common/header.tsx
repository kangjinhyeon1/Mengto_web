"use client"

import { getCookie, removeCookie } from "@/lib/cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

    const [check, setCheck] = useState<string | undefined>();

    useEffect(()=>{
        const token = getCookie('accessToken')
        setCheck(token)
    },[])

    return (
        <div className="w-[70%] flex justify-between mt-5">
            <Link href="/">
                <img src="/img/LongLogo.png" className='w-[10%] min-w-24 cursor-pointer' />
            </Link>
            <div>
                {
                    check !== undefined ?
                    <div className="w-[17%] min-w-44 flex items-center justify-between">
                        <Link href="/my" className='text-titleMedium text-gray-900 cursor-pointer'>마이페이지</Link>
                        <p onClick={()=>{removeCookie('accessToken'); window.location.reload();}} className='text-titleMedium text-gray-900 cursor-pointer'>로그아웃</p>
                    </div>
                    :
                    <>
                        <Link href="/login" className='text-titleMedium text-gray-900 cursor-pointer'>로그인</Link>
                    </>
                }
            </div>
        </div>
    );
}